import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.Interceptor';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CompanyDetailComponent } from './admin-panel/company-detail/company-detail.component';
import { CompanyDetailListComponent } from './admin-panel/company-detail-list/company-detail-list.component';
import { CompanyDetailService } from './shared/company-detail.service';
import { EmployeeDetailComponent } from './admin-panel/employee-detail/employee-detail.component';
import { EmployeeDetailListComponent } from './admin-panel/employee-detail-list/employee-detail-list.component';
import { CompanyListComponent } from './home/company-list/company-list.component';
import { EmployeeListComponent } from './home/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    CompanyDetailComponent,
    CompanyDetailListComponent,
    EmployeeDetailComponent,
    EmployeeDetailListComponent,
    CompanyListComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [UserService, CompanyDetailService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
