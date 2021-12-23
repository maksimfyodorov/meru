import { Directive, EmbeddedViewRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ConditionService } from '@core/services/condition.service';
import { ConditionType } from '@core/types/condition.type';
import { ICondition } from '@core/models/condition.model';

interface IConditionContext {
  $implicit: boolean;
}

@Directive({
  selector: '[appCondition]',
})
export class ConditionDirective implements OnInit {
  private _type: ConditionType = 'disable';
  private _expression: string = 'false';
  private _url: string;
  private _data: Record<string, any> = {};
  private _context: IConditionContext;
  private _ready: boolean = false;

  private _viewRef: EmbeddedViewRef<IConditionContext> | null = null;
  private _altTemplateRef: TemplateRef<any> | null = null;

  @Input()
  public set appConditionFor(condition: ICondition | string | boolean) {
    if (typeof condition === 'object') {
      this._type = condition.type;
      this._expression = String(condition.expression);
      this._url = condition.url;
    } else {
      this._expression = String(condition);
    }

    this.checkCondition();
  }

  @Input()
  public set appConditionType(type: ConditionType) {
    this._type = type;
    this.checkCondition();
  }

  @Input()
  public set appConditionUrl(url: string) {
    this._url = url;
    this.checkCondition();
  }

  @Input()
  public set appConditionData(data: Record<string, any>) {
    this._data = data;
    this.checkCondition();
  }

  @Input()
  public set appConditionElse(altTemplateRef: TemplateRef<any>) {
    this._altTemplateRef = altTemplateRef;
  }

  private set $implicit($implicit: boolean) {
    this._context.$implicit = $implicit;
    this.updateView();
  }

  public constructor(
    private $condition: ConditionService,
    private _templateRef: TemplateRef<IConditionContext>,
    private _viewContainer: ViewContainerRef,
  ) {}

  public ngOnInit(): void {
    this._context = {
      $implicit: this._type === 'visible',
    };

    this._ready = true;
    this.checkCondition();
  }

  private checkCondition(): void {
    if (!this._ready) {
      return;
    }

    if (this._url) {
      this.checkConditionAsync();
      return;
    }
    this.$implicit = this.$condition.check(this._expression, this._data);
  }

  private checkConditionAsync(): void {
    this.$condition.checkAsync(this._expression, this._data, this._url).subscribe((result) => (this.$implicit = result));
  }

  private updateView(): void {
    if (this._type !== 'visible') {
      if (!this._viewRef) {
        this._viewRef = this._viewContainer.createEmbeddedView(this._templateRef, this._context);
      }
      return;
    }

    if (this._context.$implicit && !this._viewRef) {
      this._viewRef = this._viewContainer.createEmbeddedView(this._templateRef, this._context);
      return;
    }

    if (!this._context.$implicit && this._altTemplateRef) {
      this._viewRef = this._viewContainer.createEmbeddedView(this._altTemplateRef, this._context);
      return;
    }

    if (!this._context.$implicit && !!this._viewRef) {
      this._viewRef = null;
      this._viewContainer.clear();
    }
  }
}
