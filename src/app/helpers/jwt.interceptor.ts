import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserService } from '../services/user/user.service';
import {Router} from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private _userService: UserService,
        public router:Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // if (this._userService.isLogged()){
            // let token = this._userService.token;
            // console.log(token);
            // if (token) {
            //     request = request.clone({
            //         setHeaders: {
            //             Authorization: `Bearer ${token}`,
            //         }
            //     });
            // }
            // console.log(request);

        // }
        return next.handle(request);
    }
}