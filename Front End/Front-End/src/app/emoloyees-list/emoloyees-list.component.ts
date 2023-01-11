import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-emoloyees-list',
  templateUrl: './emoloyees-list.component.html',
  styleUrls: ['./emoloyees-list.component.css'],
})
export class EmoloyeesListComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private _service: EmployeesService) {}

  ngOnInit(): void {
    this._service.getList().subscribe({
      next: (e) => {
        this.employees = e;
      },
      error: (x) => {
        console.log(x);
      },
    });
  }
}
