import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    // { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
