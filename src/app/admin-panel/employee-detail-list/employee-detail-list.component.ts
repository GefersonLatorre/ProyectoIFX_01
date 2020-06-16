import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EmployeeDetail } from 'src/app/shared/employee-detail.model';
import { EmployeeDetailService } from 'src/app/shared/employee-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-detail-list',
  templateUrl: './employee-detail-list.component.html',
  styles: [
  ]
})
export class EmployeeDetailListComponent implements OnInit {

  @Output() public dataE: EventEmitter<EmployeeDetail> = new EventEmitter();
  @Output() public viewPanelsE: EventEmitter<boolean> = new EventEmitter();
  @Input("vp") idCompany: number;

  constructor(public serviceCrudE: EmployeeDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.serviceCrudE.refreshList(this.idCompany);
  }

  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.serviceCrudE.deleteEmployeeDetail(Id)
        .subscribe(res => {
          this.serviceCrudE.refreshList(this.idCompany);
          this.toastr.warning('Deleted successfully', 'Employee Register');
        },
          err => {
            this.toastr.error('Error', err);
          })
    }
  }

}
