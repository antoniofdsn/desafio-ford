import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, pluck } from 'rxjs/operators';
import { vehicle, vehiclesAPI } from './models/vehicle';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API = environment.api;

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getVehicles() {
    return this.httpClient.get<vehiclesAPI>(`${API}/vehicle`);
  }
}
