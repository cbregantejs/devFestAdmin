import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../config/confg';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
// firebase
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

    token: string;
    user: User;
    authState: any = null;

    constructor(
        public http: HttpClient,
        private router: Router,
        public angularFireAuth: AngularFireAuth,
    ) {
        // some
        this.angularFireAuth.authState.subscribe((auth) => {
            // console.log(auth);
            this.authState = auth;
            if (this.authState != null) {
                let obj = {
                    email: this.authState.email,
                    fullname: this.authState.displayName,
                    phone: this.authState.phoneNumber,
                    avatar: this.authState.photoURL
                };
                // console.log(obj);
                this.setInfoUser(obj);
            }
        });

    }

    async logoutUser() {
        await this.angularFireAuth.auth.signOut();
        return true;
    }


    async loginUser(user: any) {
        return await this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
        .then(response => {
            let obj = {
                email: response.user.email,
                fullname: response.user.displayName,
                phone: response.user.phoneNumber,
                avatar: response.user.photoURL
            };
            this.setInfoUser(obj);
            return true;
        }, err => {
            console.log(err);
            return false;
        });
    }

    setInfoUser (user: User) {
        let obj = {
            email: user.email,
            fullname: user.fullname,
            phone: user.phone,
            avatar: user.avatar
        };
        this.user = obj;
    }


}
