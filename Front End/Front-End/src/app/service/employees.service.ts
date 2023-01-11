import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + 'api/employee');
  }

  create(employee: Employee): Observable<Employee> {
    employee.id = '554cac61-90d4-4808-8049-d970f57c81df';
    return this.http.post<Employee>(this.baseUrl + 'api/employee', employee);
  }

  getById(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + 'api/employee/' + id);
  }
  update(id: string, employee: Employee) {
    return this.http.put<Employee>(
      this.baseUrl + 'api/employee/' + id,
      employee
    );
  }

  delete(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseUrl + 'api/employee/' + id);
  }
}
