import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from '../../app.routes';

// components
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
    declarations: [
        NavigationComponent,
    ],
    exports: [
        NavigationComponent,
    ],
    imports: [
        APP_ROUTING,
        BrowserModule
    ]
})
export class SharedModule { }
