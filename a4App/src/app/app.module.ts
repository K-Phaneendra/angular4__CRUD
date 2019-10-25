import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { EmployeesDataComponent } from './components/employees-data/employees-data.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    EmployeesDataComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatTableModule,
    RouterModule.forRoot(
      [
        {path: 'home', component: HomeComponent},
        {path: 'frontend', component: TodolistComponent},
        {path: 'meanstack', component: EmployeesDataComponent},
        {path: 'forms', component: FormComponent},
      ]
    ),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
