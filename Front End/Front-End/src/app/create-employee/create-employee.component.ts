import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  createEmployee: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };

  constructor(private _service: EmployeesService, private _router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this._service.create(this.createEmployee).subscribe({
      next: (e) => {
        this._router.navigate(['employees']);
      },
    });
  }
}
