import { Routes } from '@angular/router';

import { PageIndexComponent, PageInputComponent } from './pages';

export const routes: Routes = [
    { path: '', component: PageIndexComponent },
    { path: 'input/:INPUT', component: PageInputComponent },
    { path: '**', redirectTo: '/' },
];
