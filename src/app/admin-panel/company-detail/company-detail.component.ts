import { Component, OnInit } from '@angular/core';
import { CompanyDetailService } from 'src/app/shared/company-detail.service';
import { ToastrService } from 'ngx-toastr';
import { CompanyDetail } from 'src/app/shared/company-detail.model';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styles: [
  ]
})
export class CompanyDetailComponent implements OnInit {
  datosC: CompanyDetail = new CompanyDetail();
  
  constructor(private serviceCrudC: CompanyDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {  
    this.resetForm();
  }

  uploadDatosC(data: CompanyDetail){
    this.datosC = data;
  }

  resetForm() {    
    this.datosC = new CompanyDetail();
  }

  onSubmit() {
    if (this.datosC.Id == 0 || this.datosC.Id == undefined)
      this.insertRecord();
    else
      this.updateRecord();
  }

  insertRecord() {
    this.serviceCrudC.postCompanyDetail(this.datosC).subscribe(
      res => {
        this.toastr.success('Submitted successfully', 'Company Detail Register');
        this.resetForm();
        this.serviceCrudC.refreshList();
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

  updateRecord() {
    this.serviceCrudC.putCompanyDetail(this.datosC).subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Submitted successfully', 'Company Detail Register');
        this.serviceCrudC.refreshList();
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

}
