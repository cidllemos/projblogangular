import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { ContentComponent } from './pages/content-component/content-component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'content/:id',
        component:ContentComponent
    }
];
