import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/service.index';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
// firebase
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    title = 'Login';
    loading: boolean = false;
    error_login: boolean = false;

    constructor(
        public _userService: UserService,
        private router: Router,
        public angularFireAuth: AngularFireAuth,
    ) {
        console.log(this._userService.authState);
        this.angularFireAuth.authState.subscribe((auth) => {
            console.log(auth);
            if (auth != null) {
                this.router.navigate(['/dashboard']);
            }
        });
    }

    ngOnInit() {
    }

    toLogin( data: NgForm ) {
        this.loading = true;
        if (data.valid) {
            let user = {
                email: data.value.email,
                password: data.value.password
            };
            this._userService.loginUser(user)
                .then(res => {
                    // console.log(res);
                    if (res) {
                        setTimeout( ( ) => {
                            this.router.navigate(['/dashboard']);
                        }, 1000);
                    } else {
                        this.loading = false;
                        this.error_login = true;
                    }
                    // this.loading = false;
                }, err => {
                    console.log(err);
                    this.loading = false;
                    this.error_login = true;
                });
        } else {
            setTimeout(() => {
                this.loading = false;
            }, 1000);
            return false;
        }
    }
}
