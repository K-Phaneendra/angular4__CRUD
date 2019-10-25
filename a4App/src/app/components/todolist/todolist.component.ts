import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

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

  dataSource = new RandomDataSource();
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  
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

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export class RandomDataSource extends DataSource<any> {

  sampledata: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.sampledata = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
      {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
      {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
      {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
      {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
      {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
      {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
      {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
      {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
      {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
    ];
  }

  connect(): Observable<Element[]> {
    return this.sampledata;
  }
  disconnect() {}
}