import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoTableLiterals } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { vehicles } from './models/vehicle';
import { vehicleData, vehiclesData } from './models/vehicleData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  vehicles: vehicles;
  vehicleName: string;
  vehicleImg: string;
  totalSales: string | number;
  connected: string | number;
  softwareUpdates: string | number;
  $index: number;
  vehiclesData: vehiclesData;
  items: [vehicleData];
  columns: Array<object> = [
    {property:'vin', label:'Código-Vin'},
    {property:'odometer', label:'Odômetro'},
    {property:'fuelLevel', label:'Nível de combustivel'},
    {property:'status', label:'Status'},
    {property:'lat', label:'Latitude'},
    {property:'long', label:'Longitude'}
  ];
  vehicleData: any;
  private vehiclesSubscripition: Subscription;
  private vehiclesDataSubscripition: Subscription;

  customLiterals: PoTableLiterals = {
    noData: 'Selecione um Veículo ou pesquise um Código Vin'
  };

  constructor(private DashboardService: DashboardService) {}

  ngOnInit(): void {
    this.vehiclesSubscripition = this.DashboardService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
    });
    this.vehiclesDataSubscripition = this.DashboardService.getVehiclesData().subscribe((data) => {
      this.vehiclesData = data;
    });
  }

  ngOnDestroy(): void {
    this.vehiclesSubscripition.unsubscribe();
    this.vehiclesDataSubscripition.unsubscribe();
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

  setVehicleData(id: number) {
    id = id - 1;
    this.vehicleData = this.vehiclesData[id];
    this.items = [this.vehicleData];
  }

}
