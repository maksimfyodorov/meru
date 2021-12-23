import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { IUser } from '@core/models/user.model';
import { AuthService } from '@presentation/auth/auth.service';
import { Observable } from 'rxjs';
import { IndexedDbService } from '@shared/indexed-db/indexed-db.service';
import { NavigationService } from '@core/services/navigation.service';

@Component( {
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: [ './header-profile.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class HeaderProfileComponent implements OnInit {
  currentUser$: Observable<IUser>;

  constructor(
    private $user: UserService,
    private $auth: AuthService,
    private $indexedDb: IndexedDbService,
    private $nav: NavigationService
  ) {
    this.currentUser$ = this.$user.info$;
  }

  public clearDatabase(): void {
    this.$indexedDb
      .clearAll()
      .subscribe( () => {
        this.$nav
          .go( '/', {} )
          .then( () =>
            window.location.reload()
          );
      } );
  }

  public logout(): void {
    this.$auth.logout();
  }

  public ngOnInit(): void {
  }
}
