import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../user/user.service';
// firebase
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
      public _userService: UserService,
      public  router: Router,
      public angularFireAuth: AngularFireAuth,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  {
      return this.angularFireAuth.authState
        .pipe(
          take(1),
          map(user => !!user),
          tap(loggedIn => {
            if (!loggedIn) {
              // console.log('access denied')
              this.router.navigate(['/login']);
            }else{
              // console.log("la ruta paso bien por el guard :v");
            }
          })
        )
  }
}
