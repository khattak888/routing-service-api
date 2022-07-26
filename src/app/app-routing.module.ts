import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './register/signup/signup.component';
import { LoginComponent } from './register/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'about',
    // component:AboutComponent
    redirectTo:'signup', pathMatch:'full'
  },

  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'profile/:name',
    component:AboutComponent
  },

  {
    path:'signup',
    component:SignupComponent
  },

  {
    path:'**',
    component:PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
