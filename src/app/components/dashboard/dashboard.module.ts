import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';

import { DASHBOARD_ROUTING } from './dashboard.routes';


// components
import { DashboardComponent } from './dashboard.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { NopagefoundComponent } from '../errors/nopagefound/nopagefound.component';

import {JwtInterceptor} from "../../helpers/jwt.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";


@NgModule({
    declarations: [
        DashboardComponent,
        SpeakersComponent,
        HomeDashboardComponent,
    ],
    exports: [
        DashboardComponent,
        SpeakersComponent,
        HomeDashboardComponent,
    ],
    imports: [
        DASHBOARD_ROUTING,
        BrowserModule,
        SharedModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ]
})
export class DashboardModule { }
