import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule} from '@angular/forms';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ServerElementComponent } from './lifecycle/server-element/server-element.component';
import { CockpitComponent } from './lifecycle/cockpit/cockpit.component';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import {routerModule} from './app.routing';
import { DirectiveComponent } from './directive/directive.component';
import { UnlessDirective } from './directive/unless.directive';
import { BasicHighlightDirective } from './directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight/better-highlight.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import {AccountsService} from './services/service/accounts.service';
import {LoggingService} from './services/service/logging.service';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipesComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipeItemComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
        LifecycleComponent,
        ServerElementComponent,
        CockpitComponent,
        TodoComponent,
        TodolistComponent,
        DirectiveComponent,
        UnlessDirective,
        BasicHighlightDirective,
        BetterHighlightDirective,
        DropdownDirective,
        ServicesComponent,
        AccountComponent,
        NewAccountComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routerModule,
    ],
    providers: [AccountsService, LoggingService],
    bootstrap: [AppComponent]
})
export class AppModule {
}