import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../app/modules/users/users.component';
import { LoginComponent } from '..//app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { IssuesComponent } from '../app/modules/issues/issues.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
