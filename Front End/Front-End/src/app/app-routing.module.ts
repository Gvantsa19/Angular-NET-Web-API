import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmoloyeesListComponent } from './emoloyees-list/emoloyees-list.component';

const routes: Routes = [
  {
    path: '',
    component: EmoloyeesListComponent
  },
  {
    path: 'employees',
    component: EmoloyeesListComponent
  },
  {
    path: 'employees/create',
    component: CreateEmployeeComponent
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
