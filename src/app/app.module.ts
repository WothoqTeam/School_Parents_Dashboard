import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Main App
import { AppComponent } from './app.component';
// Which Admin
import { WhichAdminComponent } from './which-admin/which-admin.component';
// Parent
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HeaderComponent } from './shared/header/header.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { SideComponent } from './shared/side/side.component';
import { PaymentComponent } from './payment/payment.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { InterviewTestsComponent } from './interview-tests/interview-tests.component';
import { BanksComponent } from './banks/banks.component';
import { AcceptTestsComponent } from './accept-tests/accept-tests.component';
import { OrderDatailsComponent } from './order-datails/order-datails.component';
// School Board
import { AuthInterceptor } from './school-board/Guards/auth.interceptor';
import { LooginComponent } from './school-board/Pages/loogin/loogin.component';
import { ForgetPassComponent } from './school-board/Pages/forget-pass/forget-pass.component';
import { CodepassComponent } from './school-board/Pages/codepass/codepass.component';
import { ResetPassComponent } from './school-board/Pages/reset-pass/reset-pass.component';
import { DashboardSchoolComponent } from './school-board/Dashboard School/dashboard-school/dashboard-school.component';
import { HomeSchoolComponent } from './school-board/Dashboard School/DashboardPagesSchool/home/home.component';
import { BranchPageComponent } from './school-board/Dashboard School/DashboardPagesSchool/branch-page/branch-page.component';
import { BankPageComponent } from './school-board/Dashboard School/DashboardPagesSchool/bank-page/bank-page.component';
import { RecordPageComponent } from './school-board/Dashboard School/DashboardPagesSchool/record-page/record-page.component';
import { ExamPageComponent } from './school-board/Dashboard School/DashboardPagesSchool/exam-page/exam-page.component';
import { InterviewPageComponent } from './school-board/Dashboard School/DashboardPagesSchool/interview-page/interview-page.component';
import { UsersPageComponent } from './school-board/Dashboard School/DashboardPagesSchool/users-page/users-page.component';
import { TeacherPageComponent } from './school-board/Dashboard School/DashboardPagesSchool/teacher-page/teacher-page.component';
import { ClassPageComponent } from './school-board/Dashboard School/DashboardPagesSchool/class-page/class-page.component';
import { ScedulePageComponent } from './school-board/Dashboard School/DashboardPagesSchool/scedule-page/scedule-page.component';
import { SideSchoolComponent } from './school-board/Shared/side/side.component';
import { CostsComponent } from './school-board/Dashboard School/DashboardPagesSchool/costs/costs.component';
import { HeaderSchoolComponent } from './school-board/Shared/header/header.component';
import { AddBranchComponent } from './school-board/Dashboard School/Add-Component/add-branch/add-branch.component';
import { AddbankComponent } from './school-board/Dashboard School/Add-Component/addbank/addbank.component';






@NgModule({
  declarations: [
    AppComponent,
    // 
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ScheduleComponent,
    SideComponent,
    PaymentComponent,
    AddOrderComponent,
    InterviewTestsComponent,
    BanksComponent,
    AcceptTestsComponent,
    OrderDatailsComponent,
    // 
    WhichAdminComponent,
    // School
    LooginComponent,
    ForgetPassComponent,
    CodepassComponent,
    ResetPassComponent,
    DashboardSchoolComponent,
    HomeSchoolComponent,
    BranchPageComponent,
    BankPageComponent,
    RecordPageComponent,
    ExamPageComponent,
    InterviewPageComponent,
    UsersPageComponent,
    TeacherPageComponent,
    ClassPageComponent,
    ScedulePageComponent,
    SideSchoolComponent,
    CostsComponent,
    HeaderSchoolComponent,
    AddBranchComponent,
    AddbankComponent,
    
    

  ],
  imports: [
    PdfViewerModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders,AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
