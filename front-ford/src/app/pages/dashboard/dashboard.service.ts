import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
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
        pluck('vehicles')
      );
  }

  getVehiclesModelData() {
    return this.httpClient
      .get<vehiclesAPI>(`${API}/vehicle`)
      .pipe(
        pluck('vehicleData')
      );
  }

  getVehiclesData(typedVin?: string) {
    const params = typedVin ? new HttpParams().append('valor', typedVin) : undefined;
    return this.httpClient
      .get<any>(`${API}/vehicleData`, { params })
      .pipe(
        pluck('vehicleData')
      );
  }

}
