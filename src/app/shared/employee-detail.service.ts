import { Injectable } from '@angular/core';
import { EmployeeDetail } from './employee-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  readonly rootURL = 'http://localhost:60833/api';
  list: EmployeeDetail[];

  constructor(private http: HttpClient) { }

  postEmployeeDetail(formDataCrud: EmployeeDetail) {    
    console.log(formDataCrud);
    return this.http.post(this.rootURL + '/Employee', formDataCrud);
  }
  putEmployeeDetail(formDataCrud: EmployeeDetail) {
    return this.http.put(this.rootURL + '/Employee/'+ formDataCrud.Id, formDataCrud);
  }
  deleteEmployeeDetail(id) {
    return this.http.delete(this.rootURL + '/Employee/'+ id);
  }

  refreshList(idCompany: any){
    this.http.get(this.rootURL + '/Employee/' + idCompany)
    .toPromise()
    .then(res => this.list = res as EmployeeDetail[]);
  }
}
