import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home'; 
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {
    path: 'login',
    component: LoginComponent,
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
            path: 'out-login',
            loadChildren: () => import('./main/out-login/out-login.module')
                .then((m) => m.OutLoginModule),
            },
        ],
        },
    {
        path: '',
        component: MainComponent,
        children: [
            {
            path: 'in-login',
            loadChildren: () => import('./main/in-login/in-login.module')
                .then((m) => m.InLoginModule),
            },
        ],
        canActivate: [AuthGuard],
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);