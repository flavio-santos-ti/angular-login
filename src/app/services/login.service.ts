import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestLoginModel } from '../models/request.login.model';
import { ResponseLoginModel } from '../models/response.login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:5000/api/v1/Login';

  constructor(private http: HttpClient) { }

  public doLogin(requestLogin: RequestLoginModel): Observable<ResponseLoginModel>{

    return this.http.post<ResponseLoginModel>( this.API , requestLogin );

  }
}
