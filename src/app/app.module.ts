import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { GridSystemComponent } from './components/grid-system/grid-system.component';

@NgModule({
  declarations: [AppComponent, MenubarComponent, HomeComponent, FormComponent, GridSystemComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, InputTextModule, MenubarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
