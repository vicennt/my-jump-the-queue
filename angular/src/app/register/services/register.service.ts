import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visitor} from 'src/app/shared/backendModels/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  private baseUrl = environment.baseUrlRestServices;

  constructor(private http: HttpClient) { } // Inyectamos Angular HttpClient class
  // El objeto http nos permitirá hacer llamadas HTTP
  registerVisitor(visitor: Visitor): Observable<Visitor> {
    return this.http.post<Visitor>(`${this.baseUrl}` + '/visitormanagement/v1/visitor', visitor);
  }
}
