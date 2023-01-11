import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  details: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  constructor(
    private _route: ActivatedRoute,
    private _service: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe({
      next: (p) => {
        const id = p.get('id');

        if (id) {
          this._service.getById(id).subscribe({
            next: (x) => {
              this.details = x;
            },
          });
        }
      },
    });
  }

  onSubmit() {
    this._service.update(this.details.id, this.details).subscribe({
      next: (x) => {
        this.router.navigate(['employees']);
      },
    });
  }

  delete(id: string) {
    this._service.delete(id).subscribe({
      next: (x) => {
        this.router.navigate(['employees']);
      },
    });
  }
}
