import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../models/user.model";
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() expandedEvent = new EventEmitter<boolean>();
  @Input() statusExpanded: boolean;

  // user: User;

  constructor(
      private _userService: UserService,
      private router: Router,
      public angularFireAuth: AngularFireAuth,
  ) {
    // this.user = _userService.user;
  }

  ngOnInit() {

  }

  logout() {
    this._userService.logoutUser()
      .then(res => {
        // console.log(res);
        this.router.navigate(['./login']);
    }, err => {
        console.log(err);
    });
  }

  changeExpanded () {
    this.expandedEvent.emit();
  }

}

