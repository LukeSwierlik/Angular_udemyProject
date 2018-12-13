import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DirectiveComponent } from './directive/directive.component';
import { ServicesComponent } from './services/services.component';
import { RoutingSectionComponent } from './routing-section/routing-section.component';
import { UsersComponent } from './routing-section/users/users.component';
import { ServersComponent } from './routing-section/servers/servers.component';
import { HomeComponent } from './routing-section/home/home.component';
import { UserComponent } from './routing-section/users/user/user.component';
import { EditServerComponent } from './routing-section/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing-section/servers/server/server.component';

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
    },
    {
        path: 'routing',
        component: RoutingSectionComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'users',
                component: UsersComponent,
            },
            {
                path: 'users/:id/:name',
                component: UserComponent
            },
            {
                path: 'servers',
                component: ServersComponent,
                children: [
                    {
                        path: ':id',
                        component: ServerComponent
                    },
                    {
                        path: ':id/edit',
                        component: EditServerComponent
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

export const routerModule = RouterModule.forRoot(routesConfig, {
    enableTracing: false
});
