import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Ass2Component } from './ass2/ass2.component';
import { ASS3Component } from './a-ss3/a-ss3.component';
// start of project one
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FooterComponent } from './footer/footer.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { TheadComponent } from './thead/thead.component';
import { TFirstPageComponent } from './tfirst-page/tfirst-page.component';
import { TSeconedPageComponent } from './t-seconed-page/t-seconed-page.component';
import { HeaderComponent } from './header/header.component';
import { basicHighLightDirective } from './basic-highlight/basic-highlight-directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DirectiveTrainingDirective } from './directive-training.directive';
import { dropdownDirective } from './shared/dropdown.directive';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { AccountService } from './accounts.service';
import { loggingService } from './logging.service';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { CounterService } from './counter.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ServComponent } from './serv/serv.component';
import { EditServComponent } from './serv/edit-serv/edit-serv.component';
import { RouterModule, Routes } from '@angular/router';
import { UseComponent } from './user/use/use.component';
import { SerComponent } from './serv/ser/ser.component';
import { ServerService } from './serv/servers.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AppRoutingModule } from './app-routing.module';
import { trainingModel } from './training.module';
import { trainingService } from './training.sevice';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './serv/edit-serv/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './serv/ser/server-resolver.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { UserrComponent } from './userr/userr.component';
import { HouseComponent } from './house/house.component';
import { RecipeService } from './recipes/recipe.service';
import { ShortenPipe } from './shorten.pipe';
import { filter } from 'rxjs';
import { FilterPipe } from './filter.pipe';
import { TryingPipe } from './trying.pipe';
import { LearnCompComponent } from './learn-comp/learn-comp.component';
import { DefaultImagePipe } from './default-image.pipe';


// const training: Routes = [
//   {path: '', component: EvenComponent}, // localHost:4200
//   // {path: 'odd/:id/:name', component: FooterComponent}, // localHost:4200/0dd
//   {path: 'odd', component: OddComponent}, // localHost:4200/0dd
//   {path: 'footer', component: FooterComponent}, // localHost:4200/0dd
// ]

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Ass2Component,
    ASS3Component,
    // start of project one
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    // training
    FooterComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    TheadComponent,
    TFirstPageComponent,
    TSeconedPageComponent,
    HeaderComponent,
    basicHighLightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DirectiveTrainingDirective,
    dropdownDirective,
    NewAccountComponent,
    AccountComponent,
    InactiveUsersComponent,
    ActiveUsersComponent,
    HomeComponent,
    UserComponent,
    ServComponent,
    EditServComponent,
    UseComponent,
    SerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    UserrComponent,
    HouseComponent,
    ShortenPipe,
    FilterPipe,
    TryingPipe,
    LearnCompComponent,
    DefaultImagePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
    // RouterModule.forRoot(training)
  ],
  providers: [AccountService,loggingService,CounterService, ShoppingListService,
     ServerService,trainingService,AuthService,AuthGuard,CanDeactivateGuard, ServerResolver, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
