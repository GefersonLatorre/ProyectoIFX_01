import { Injectable } from '@angular/core';
import { CompanyDetail } from './company-detail.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {
  
  readonly rootURL = 'http://localhost:60693/api';
  list: CompanyDetail[];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  postCompanyDetail(formDataCrud: CompanyDetail) {
    return this.http.post(this.rootURL + '/Company', formDataCrud);
  }
  putCompanyDetail(formDataCrud: CompanyDetail) {
    return this.http.put(this.rootURL + '/Company/'+ formDataCrud.Id, formDataCrud);
  }
  deleteCompanyDetail(id) {
    return this.http.delete(this.rootURL + '/Company/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Company')
    .toPromise()
    .then(res => this.list = res as CompanyDetail[]);
  }
}
