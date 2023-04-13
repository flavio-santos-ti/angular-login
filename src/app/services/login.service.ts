import { ResponseLoginModel } from './../models/response.login.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestLoginModel } from '../models/request.login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:5000/api/v1/Login';


  // injetando o HttpClient
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public Autenticar(dados: RequestLoginModel): Observable<ResponseLoginModel>{

    return this.http.post<ResponseLoginModel>( this.API , dados, this.httpOptions );

  }

}
