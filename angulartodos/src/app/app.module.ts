import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './appRouting.module';
import { NavbarComponent } from './navbar/navbar.component';
// import { DisplayTaskComponent } from './display-task/display-task.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent
    // DisplayTaskComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
