import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './seguridad/login/login.component';



const routes: Routes = [{
  path: '',
  redirectTo: 'seguridad/login',
  pathMatch: 'full',
},
{
  path: 'seguridad/login',
  component: LoginComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
