import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getWorldBankInfo(countryCode: string) : Observable<any> {
    const apiUrl = `http://api.worldbank.org/v2/country/${countryCode}?format=json`;
    return this.http.get<any>(apiUrl);
  }
}
