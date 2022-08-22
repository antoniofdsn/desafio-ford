import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { vehicle, vehicles } from './models/vehicle';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  vehicles: vehicles;
  vehicleName: string;
  vehicleImg: string;
  totalSales: any;
  connected: any;
  softwareUpdates: any;
  $index: number;

  constructor(private DashboardService: DashboardService) {}

  ngOnInit(): void {
    this.DashboardService.getVehicles().subscribe((api) => {
      this.vehicles = api.vehicles;
    });
  }

  selectVehicle(id: number) {
    id = id - 1;
    this.vehicleName = this.vehicles[id].vehicle;
    this.vehicleName = this.vehicleName.replace(/\s/g, '');
    this.vehicleName = this.vehicleName.toLowerCase();

    this.vehicleImg = `../../../assets/img/cars/${this.vehicleName}.png`;
  }

  setCardValues(id: number) {
    id = id - 1;
    this.totalSales = this.vehicles[id].volumetotal;
    this.connected = this.vehicles[id].connected;
    this.softwareUpdates = this.vehicles[id].softwareUpdates;
  }

}
