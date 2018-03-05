import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  // some data of this UserComponent
  toDoList: any[];
  openEdit: boolean;
  selectedEdit: string;

  title: string;
  subscription: Subscription;

  constructor(private _dataService: DataService) {
    // receiving data from titleSource from DataService
    this.subscription = this._dataService.currentTitle
    .subscribe(
      title => this.title = "FrontEnd "+title,
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.toDoList = ['wake up @ 5am', 'gym @ 6am', 'bath @ 7am'];
    this.openEdit = false;
    this.selectedEdit = '';
  }

  addNewtodo(todo) {
    this.toDoList.push(todo);
    return false;
  }
  delete_todo(todo) {
    for (var i=0; i<this.toDoList.length; i++) {
      if (this.toDoList[i] == todo) {
        this.toDoList.splice(i, 1);
      }
    }
  }
  edit_todo(todo) {
    this.openEdit = !this.openEdit;
    this.selectedEdit = todo;
  }
  updatetodo(editedtodo) {
    console.log(editedtodo);
    for (var i=0; i<this.toDoList.length; i++) {
      if (this.toDoList[i] == this.selectedEdit) {
        this.toDoList[i] = editedtodo;
      }
    }
    this.edit_todo(editedtodo)
  }
}
