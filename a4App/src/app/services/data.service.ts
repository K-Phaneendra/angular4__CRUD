import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) {
  }

  getEmployees() {
    const body = "_body";
    return this._http.get("http://localhost:4202/employees")
    .map(result => {
      // console.log(result);
      // console.log(JSON.parse(result[body]));
      this.result = JSON.parse(result[body]);
      return this.result;
    });
  }

  addEmployee(addEmp) {
    const body = "_body";
    return this._http.post("http://localhost:4202/employees", addEmp)
    .map(result => {
      return JSON.parse(result[body]);
    })
  }

  delEmployee(id) {
    console.log(id);
    this._http.delete("http://localhost:4202/employees/"+id)
    // subscribe is written here to send any data in API-URL
    .subscribe(
      // (res: Response) => {
      //   console.log(res.json())
      // }
    )
  }

  updateEmployee(updateEmp) {
    console.log(updateEmp);
    const body = "_body";
    return this._http.put("http://localhost:4202/employees/"+updateEmp.id, updateEmp)
    .map(result => {
      return JSON.parse(result[body]);
    })
  }
}
