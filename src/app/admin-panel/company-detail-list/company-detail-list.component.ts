import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompanyDetailService } from 'src/app/shared/company-detail.service';
import { CompanyDetail } from 'src/app/shared/company-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-detail-list',
  templateUrl: './company-detail-list.component.html',
  styles: [
  ]
})
export class CompanyDetailListComponent implements OnInit {

  @Output() public dataC: EventEmitter<CompanyDetail> = new EventEmitter();
  @Output() public viewPanelsC: EventEmitter<number> = new EventEmitter();
  
  constructor(public serviceCrudC: CompanyDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.serviceCrudC.refreshList();
  }

  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.serviceCrudC.deleteCompanyDetail(Id)
        .subscribe(res => {
          this.serviceCrudC.refreshList();
          this.toastr.warning('Deleted successfully', 'Company Register');
        },
          err => {
            this.toastr.error('The company has associate employees', 'Error');
          })
    }
  }

}
