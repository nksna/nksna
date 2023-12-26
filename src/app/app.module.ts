import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ItemsComponent } from './pages/items/items.component';
import { CreateorderComponent } from './pages/createorder/createorder.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    ItemsComponent,
    CreateorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     ReactiveFormsModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
