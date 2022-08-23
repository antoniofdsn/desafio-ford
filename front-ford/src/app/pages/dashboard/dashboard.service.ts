import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck } from 'rxjs/operators';
import { vehiclesAPI } from './models/vehicle';
import { environment } from 'src/environments/environment';

const API = environment.api;

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getVehicles() {
    return this.httpClient
      .get<vehiclesAPI>(`${API}/vehicle`)
      .pipe(
        map((api) => api.vehicles)
      );
  }

  getVehiclesData() {
    return this.httpClient
      .get<any>(`${API}/vehicleData`)
      .pipe(
        pluck('vehicleData'),
      );
  }
}
