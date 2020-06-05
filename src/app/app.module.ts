import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import localeNo from '@angular/common/locales/nb';

registerLocaleData(localeNo, 'nb');

import { AppComponent } from './app.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'editTodo', component: EditTodoComponent }
];

@NgModule({
  providers:    [
    { provide: LOCALE_ID, useValue: 'nb' },
  ],  
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, EditTodoComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
