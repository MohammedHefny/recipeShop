import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { NotFoundError } from "rxjs";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { EvenComponent } from "./even/even.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { HouseComponent } from "./house/house.component";
import { OddComponent } from "./odd/odd.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { CanDeactivateGuard } from "./serv/edit-serv/can-deactivate-guard.service";
import { EditServComponent } from "./serv/edit-serv/edit-serv.component";
import { SerComponent } from "./serv/ser/ser.component";
import { ServerResolver } from "./serv/ser/server-resolver.service";
import { ServComponent } from "./serv/serv.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { TheadComponent } from "./thead/thead.component";
import { UseComponent } from "./user/use/use.component";
import { UserComponent } from "./user/user.component";
import { UserrComponent } from "./userr/userr.component";


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // localHost:4200/users
  { path: 'users', component: UserComponent, children: [
  { path: ':id/:name', component: UseComponent }, // localHost:4200/users
] }, // localHost:4200/users
// { path: 'users/:id/:name', component: UseComponent }, // localHost:4200/users
{ path: 'serv',
//  canActivate: [AuthGuard],
canActivateChild: [AuthGuard],
  component: ServComponent,
  children: [
  { path: ':id', component: SerComponent, resolve: {server: ServerResolver} },
  { path: ':id/edit', component: EditServComponent, canDeactivate: [CanDeactivateGuard] },
] }, // localHost:4200/serv
// {path: 'not-found', component:PageNotFoundComponent},
{path: 'not-found', component:ErrorPageComponent, data: {message: 'page not found'} },
{path: '**', redirectTo: '/not-found'},
// { path: 'serv/:id', component: SerComponent },
// { path: 'serv/:id/edit', component: EditServComponent },
];


// the app routing
const appRoute: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];

const routeTraining: Routes = [
  {path: '', component: EvenComponent},
  {path: 'odd', component: OddComponent, children: [
    {path: 'mychild', component: TheadComponent}
  ]},
  {path: 'odd/:id/:name', component: OddComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'wrongPath', component: PageNotFoundComponent },
  {path: '**', redirectTo: 'wrongPath' },
]


const routeobserv: Routes = [
  {path: '', component: HouseComponent},
  {path: 'user', component: UserrComponent},
  // {path: 'user:/id', component: UserrComponent},
]
@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true}),
    RouterModule.forRoot(appRoute),
    // RouterModule.forRoot(appRoute),
    // RouterModule.forRoot(routeTraining),
    // RouterModule.forRoot(routeobserv),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
