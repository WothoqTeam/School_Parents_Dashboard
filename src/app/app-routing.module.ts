import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Parent
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PaymentComponent } from './payment/payment.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { InterviewTestsComponent } from './interview-tests/interview-tests.component';
import { BanksComponent } from './banks/banks.component';
import { AcceptTestsComponent } from './accept-tests/accept-tests.component';
import { OrderDatailsComponent } from './order-datails/order-datails.component';
// Which Admin
import { WhichAdminComponent } from './which-admin/which-admin.component';
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
import { CostsComponent } from './school-board/Dashboard School/DashboardPagesSchool/costs/costs.component';
import { AddBranchComponent } from './school-board/Dashboard School/Add-Component/add-branch/add-branch.component';
import { AddbankComponent } from './school-board/Dashboard School/Add-Component/addbank/addbank.component';

const routes: Routes = [
  { path: 'which-admin', component: WhichAdminComponent },
  // 
  { path: 'school/Loginschool', component: LooginComponent},
  { path: 'school/ForgetPass', component: ForgetPassComponent},
  { path: 'school/CodePass', component: CodepassComponent},
  { path: 'school/ResetPass', component: ResetPassComponent},
  { path: 'school/home', component: HomeSchoolComponent},
  { path: 'school/branch', component: BranchPageComponent},
  { path: 'school/bank', component: BankPageComponent},
  { path: 'school/record', component: RecordPageComponent},
  { path: 'school/exam', component: ExamPageComponent},
  { path: 'school/interview', component: InterviewPageComponent},
  { path: 'school/users', component: UsersPageComponent},
  { path: 'school/teacher', component: TeacherPageComponent},
  { path: 'school/classes', component: ClassPageComponent},
  { path: 'school/schedule', component: ScedulePageComponent},
  { path: 'school/cost', component: CostsComponent},
  { path: 'school/branch/addbranch', component: AddBranchComponent},
  { path: 'school/branch/addbank', component: AddbankComponent},

  // 
  { path: 'parent/home', component: HomeComponent },
  { path: 'parent/order-details', component: OrderDatailsComponent },
  { path: 'parent/schedule', component: ScheduleComponent },
  { path: 'parent/login', component: LoginComponent },
  { path: 'parent/register', component: RegisterComponent },
  { path: 'parent/payment', component: PaymentComponent },
  { path: 'parent/banks', component: BanksComponent },
  { path: 'parent/accept-tests', component: AcceptTestsComponent },
  { path: 'parent/interview-tests', component: InterviewTestsComponent },
  { path: 'parent/add-order', component: AddOrderComponent },
  { path: '', redirectTo: 'which-admin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }