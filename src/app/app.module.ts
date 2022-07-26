import { BusbookingService } from './busbooking.service';
// import { UseraddressService } from './useraddress.service';
// import { UserdataService } from './userdata.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterModule } from './register/register.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Agent1Component } from './agent1/agent1.component';
import { Agent2Component } from './agent2/agent2.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PagenotfoundComponent,
    Agent1Component,
    Agent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule
  ],
  providers: [BusbookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
