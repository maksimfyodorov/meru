import { ConfigService } from '@core/services/config.service';
import { HttpService } from '@core/services/http.service';
import { LocalizationService } from '@core/services/localization.service';
import { DictionaryName } from '@shared/dictionaries/dictionaries.constants';
import { Injector } from '@angular/core';
import { DictionariesIndexedDb } from '@shared/dictionaries/dictionaries.indexed-db';
import { map, pluck, shareReplay, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DictionaryItemType, IDictionary } from '@shared/dictionaries/dictionaries.model';


export class DictionaryService<D extends IDictionary = IDictionary, V extends any = DictionaryItemType<D>> {
  protected _value: V;
  protected _dictionaryName: DictionaryName;
  protected _value$: Observable<V>;

  protected $config: ConfigService = this.injector.get(ConfigService);
  protected $http: HttpService = this.injector.get(HttpService);
  protected $localization: LocalizationService = this.injector.get(LocalizationService);
  protected $indexedDb: DictionariesIndexedDb = this.injector.get(DictionariesIndexedDb);

  constructor(
    protected injector: Injector
  ) {
    this._value$ = this.$localization.currentLang$.pipe(
      switchMap(lang =>
        this.$indexedDb.getDictionaryItemByIndex(this._dictionaryName, 'lang', lang)
      ),
      switchMap(value => !!value
        ? of(value)
        : this.$indexedDb.getDictionaryItemByIndex(this._dictionaryName, 'default', 'true')
      ),
      shareReplay(1)
    ) as Observable<V>;
  }

  protected get value$(): Observable<V> {
    return this._value$;
  }

  protected get value(): V {
    return this._value;
  }

  protected initialize(
    urlKey: string = null,
    defaultValues: D = [] as D
  ): Observable<any> {
    if (!this._dictionaryName) {
      return of(null);
    }

    return this.$indexedDb.getDictionary(this._dictionaryName).pipe(
      switchMap((values) => !!values.length
        ? of(true)
        : of(this.$config.get<string>(urlKey)).pipe(
          switchMap(url => !!url
            ? this.loadDictionaryData(url)
            : of(null)
          ),
          map((values) => values || defaultValues),
          switchMap((values) =>
            this.$indexedDb.addDictionary(this._dictionaryName, values)
          )
        )
      ),
      tap(() =>
        this.value$.subscribe(value => this._value = value)
      )
    );
  }

  private loadDictionaryData(url: string): Observable<D> {
    return this.$http.get(url).pipe(
      pluck('data')
    );
  }
}
