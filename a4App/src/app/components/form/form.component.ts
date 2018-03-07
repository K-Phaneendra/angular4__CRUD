import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formData: object;
  openDiv: boolean;

  title: string;
  subscription: Subscription;

  constructor(private _dataService: DataService) {
    // receiving data from titleSource from DataService
    this.subscription = this._dataService.currentTitle
    .subscribe(
      title => this.title = "Form Validations "+title,
      err => console.log(err)
    );
  }

  ngOnInit() {
  }

  log(firstName) {
    console.log(firstName);
  }

  log2(com) {
    console.log(com);
  }

  log3(lname) {
    console.log(lname);
  }

  submitFun(formVals) {
    this.formData = formVals;
    this.openDiv = true;
  }

}
