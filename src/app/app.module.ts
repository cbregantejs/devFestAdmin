import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { APP_ROUTING } from './app.routes';

// modules
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';


// components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NopagefoundComponent } from './components/errors/nopagefound/nopagefound.component';
import { FormsModule } from '@angular/forms';

// services
import { ServiceModule } from './services/service.module';
import {NavigationStart} from '@angular/router';
import { environment } from '../environments/environment.prod';


// const firebaseConfig = {
//   apiKey: 'AIzaSyAHjF1eXnh5DE8JZ6j-FOtXcVgMg6QXCEU',
//   authDomain: 'devfest2019-f22ca.firebaseapp.com',
//   databaseURL: 'https://devfest2019-f22ca.firebaseio.com',
//   projectId: 'devfest2019-f22ca',
//   storageBucket: 'devfest2019-f22ca.appspot.com',
//   messagingSenderId: '300657232999',
//   appId: '1:300657232999:web:540ec9efd9723b79'
// };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NopagefoundComponent,
  ],
    imports: [
        BrowserModule,
        APP_ROUTING,
        BrowserAnimationsModule,
        DashboardModule,
        FormsModule,
        ServiceModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
