import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:"form",
    component:FormComponent
  },
  {
    path:"calculator",
    component:CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
