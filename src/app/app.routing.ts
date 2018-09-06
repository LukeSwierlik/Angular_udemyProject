import { RouterModule, Routes } from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {LifecycleComponent} from './lifecycle/lifecycle.component';
import {TodolistComponent} from './todo/todolist/todolist.component';
import {RecipesComponent} from './recipes/recipes.component';
import {DirectiveComponent} from './directive/directive.component';
import {ServicesComponent} from './services/services.component';

const routesConfig: Routes = [
    {
        path: '',
        component: RecipesComponent,
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    },
    {
        path: 'life-cycle',
        component: LifecycleComponent
    },
    {
        path: 'todo',
        component: TodolistComponent
    },
    {
        path: 'directive',
        component: DirectiveComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    }
];

export const routerModule = RouterModule.forRoot(routesConfig, {
    enableTracing: false
});
