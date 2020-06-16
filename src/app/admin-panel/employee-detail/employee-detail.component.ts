import { Component, OnInit, Input } from '@angular/core';
import { EmployeeDetail } from 'src/app/shared/employee-detail.model';
import { EmployeeDetailService } from 'src/app/shared/employee-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styles: [
  ]
})
export class EmployeeDetailComponent implements OnInit {

  datosE: EmployeeDetail = new EmployeeDetail();
  @Input("vp") idCompany: number;
  
  constructor(private serviceCrudE: EmployeeDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {  
    this.resetForm();
  }

  uploadDatosE(data: EmployeeDetail){
    this.datosE = data;
    this.datosE.Id_Company = this.idCompany;
  }

  resetForm() {    
    this.datosE = new EmployeeDetail();
  }

  onSubmit() {    
    if (this.datosE.Id == 0 || this.datosE.Id == undefined)
      this.insertRecord();    
    else
      this.updateRecord();
  }

  insertRecord() {
    this.datosE.Id_Company = this.idCompany;
    this.serviceCrudE.postEmployeeDetail(this.datosE).subscribe(
      res => {
        this.toastr.success('Submitted successfully', 'Employee Detail Register');
        this.resetForm();
        this.serviceCrudE.refreshList(this.idCompany);
      },
      err => {
        console.log('Error', err)
        this.toastr.error('Error', err);
      }
    )
  }

  updateRecord() {
    this.serviceCrudE.putEmployeeDetail(this.datosE).subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Submitted successfully', 'Employee Detail Register');
        this.serviceCrudE.refreshList(this.idCompany);
      },
      err => {
        this.toastr.error('Error', err);
      }
    )
  }

}
