import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { DictionariesService } from '@shared/dictionaries/dictionaries.service';
import { DictionariesMatchersService } from '@shared/dictionaries/services/dictionaries-matchers.service';

@Injectable({
  providedIn: 'root'
})
export class DictionariesNotAlreadyGuard implements CanActivate {
  constructor(
    private $dictionaries: DictionariesService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return !DictionariesMatchersService.already;
  }
}
