import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  userDetails;
  panels: boolean = false;
  text: string = "Companies";
  vp = null;

  constructor(private router: Router,private service: UserService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  parent(vp: any){
    if(vp != 0){      
      this.vp = vp;
      this.panels = true;
      this.text = "Employees";
    }else{
      this.text = "Companies"
      this.panels = false;
    }
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
