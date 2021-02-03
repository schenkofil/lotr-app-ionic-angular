import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LotrService {
  auth_token:String = "bkPwCP0IlnrNPqtlT2gm";
  baseUrl:String = "https://the-one-api.dev/v2/";

  constructor(private http: HttpClient) { }
  
  public getLotr(name: String) 
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    return this.http.get(`${this.baseUrl}${name}`, { headers: headers });
  }

}
