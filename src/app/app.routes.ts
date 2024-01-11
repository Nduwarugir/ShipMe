import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'calc',
        pathMatch: 'full'
    },{
        path: 'store',
        loadComponent: () => import('./store/store.component').then( m => m.StoreComponent)
    },{
        path: 'calc',
        loadComponent: () => import('./calc/calc.component').then( m => m.CalcComponent)
    }
];
