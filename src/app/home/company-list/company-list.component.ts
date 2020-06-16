import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompanyDetailService } from 'src/app/shared/company-detail.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styles: [
  ]
})
export class CompanyListComponent implements OnInit {

  @Output() public viewPanelsC: EventEmitter<number> = new EventEmitter();

  constructor(public serviceCrudC: CompanyDetailService) { }

  ngOnInit(): void {
    this.serviceCrudC.refreshList();
  }

}
