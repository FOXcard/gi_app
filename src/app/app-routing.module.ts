import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSuccessComponent } from './success/home-success/home-success.component';
import { HomeCardComponent } from './card/home-card/home-card.component';
import { HomeComponent } from './home/home/home.component';
import { HomeMobileSuccessComponent } from './success/home-mobile-success/home-mobile-success.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path: 'success', component: window.screen.width > 767 ? HomeSuccessComponent : HomeMobileSuccessComponent}, //mobile value : 767 pixel
  {path: 'card', component: HomeCardComponent},
  {path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
