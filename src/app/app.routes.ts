import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { GraphComponent } from './graph/graph.component';

export const routes: Routes = [
    {
        path:'',
        component: LoginComponent
    },
    {
        path:'secondpage',
        component:MenuComponent
    },
    {
        path:'graphpage',
        component:GraphComponent
    }
];
