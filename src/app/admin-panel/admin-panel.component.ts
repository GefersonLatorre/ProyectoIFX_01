import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styles: [
  ]
})
export class AdminPanelComponent implements OnInit {

  @ViewChild(CompanyDetailComponent) companyDetailComponent: CompanyDetailComponent;
  @ViewChild(EmployeeDetailComponent) employeeDetailComponent: EmployeeDetailComponent;

  constructor(private router: Router) { }
  panels: boolean = false;
  text: string = "Company";
  vp = null;

  ngOnInit(): void {
  }

  parent(vp: any){
    if(vp != 0){      
      this.vp = vp;
      this.panels = true;
      this.text = "Employee";
    }else{
      this.text = "Company"
      this.panels = false;
    }
  }

  parentfuncC(data: any){
    this.companyDetailComponent.uploadDatosC(data);
  }

  parentfuncE(data: any){
    this.employeeDetailComponent.uploadDatosE(data);
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
