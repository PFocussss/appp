import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path:'login' ,component:LoginComponent },
  {path:'table' ,component:TableComponent },
  {path:'cal' ,component:CalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
