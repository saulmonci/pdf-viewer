import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {
  auth_token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzcmVuYXVkIiwidGltZUV4cCI6ODY0MDAwMDAsImF1dGgiOiJJTlNQRUNUSU9OUyBPUEVSQVRPUiIsImV4cCI6MTYyODUxNzYxNH0.ZG2RI8raZ-BDrkyKyhvhsl83FkTsJPpnJFE88woQ6O1EnQUTx3J_3flUoJRQ9OHS2ojQLJ3X8PL8Mp-jWNVSGA";
  constructor(
    private http : HttpClient
  ) { }


  getPdf(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    return this.http.get('http://desarollosj.com:8082/evr/api/vehicles/print-vehicle-registration-permit/Z2',{
      headers:headers
    });
  }
}
