import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { EmployeesDataComponent } from './components/employees-data/employees-data.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    EmployeesDataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {path: 'home', component: HomeComponent},
        {path: 'frontend', component: TodolistComponent},
        {path: 'meanstack', component: EmployeesDataComponent},
      ]
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
