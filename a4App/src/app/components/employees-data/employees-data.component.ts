import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-employees-data',
  templateUrl: './employees-data.component.html',
  styleUrls: ['./employees-data.component.css']
})
export class EmployeesDataComponent implements OnInit {

  employees: any;
  openEdit: boolean;
  selectedEmpToEdit: any;

  title: string;
  subscription: Subscription;

  constructor(private _dataService: DataService) {
    this._dataService.getEmployees()
    .subscribe(res => {
      console.log(res);
      this.employees = res;
    })
    
    // receiving data from titleSource from DataService
    this.subscription = this._dataService.currentTitle
    .subscribe(
      title => this.title = "Mongo "+title,
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.openEdit = false;
  }

  addNewemp(empName, empCode, empEmail) {
    console.log(empName, empCode, empEmail);
    if (empName !== '' && empCode !== '' && empEmail !== '') {
      const addEmp = { "name": empName, "code": empCode, "email": empEmail };
      this._dataService.addEmployee(addEmp)
      .subscribe(res => {
        this.employees.push(res);
      })
      return false;
    }
  }

  delete_emp(emp){
    console.log(emp);
    this._dataService.delEmployee(emp.id);
    for (var i=0; i<this.employees.length; i++) {
      if (this.employees[i] == emp) {
        this.employees.splice(i, 1);
      }
    }
  }

  toggle_edit(emp) {
    console.log(emp);
    this.openEdit = !this.openEdit;
    if (emp !== undefined) {
      this.selectedEmpToEdit = emp;
    }
  }

  update_emp(empid, empName, empCode, empEmail) {
    console.log(empid, empName, empCode, empEmail);
    if (empName !== '' && empCode !== '' && empEmail !== '') {
      const updateEmp = { "id": empid, "name": empName, "code": empCode, "email": empEmail };
      this._dataService.updateEmployee(updateEmp)
      .subscribe(res => {
        console.log(res);
        for (var i=0; i<this.employees.length; i++) {
          if (this.employees[i] == this.selectedEmpToEdit) {
            this.employees[i] = updateEmp;
          }
        }
        this.toggle_edit(updateEmp);
      })
    }
  }

}
