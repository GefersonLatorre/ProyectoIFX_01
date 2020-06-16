import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EmployeeDetailService } from 'src/app/shared/employee-detail.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {

  @Output() public viewPanelsE: EventEmitter<boolean> = new EventEmitter();
  @Input("vp") idCompany: number;

  constructor(public serviceCrudE: EmployeeDetailService) { }

  ngOnInit(): void {
    this.serviceCrudE.refreshList(this.idCompany);
  }

}
