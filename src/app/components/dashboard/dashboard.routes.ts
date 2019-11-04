import { RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { NopagefoundComponent } from '../errors/nopagefound/nopagefound.component';
import { AuthGuard } from '../../services/guards/auth-guard';


const DASHBOARD_ROUTES : Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: HomeDashboardComponent
            },
            {
                path: 'speakers',
                component: SpeakersComponent
            }
        ]
    },
    { path: '**', component: NopagefoundComponent }
];

export const DASHBOARD_ROUTING = RouterModule.forChild(DASHBOARD_ROUTES);
