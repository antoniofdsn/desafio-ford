import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PoTableLiterals } from '@po-ui/ng-components';
import { merge, Subscription } from 'rxjs';
import { switchMap, map, filter, distinctUntilChanged } from 'rxjs/operators';
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
  vehiclesModelData: vehiclesData;
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
  private vehiclesModelDataSubscripition: Subscription;

  customLiterals: PoTableLiterals = {
    noData: 'Selecione um veículo ou digite um código-vin válido'
  };
  vinInput = new FormControl();
  noVehiclesData$ = [{}];
  filterByInput$ = this.vinInput.valueChanges.pipe(
    filter((typedVin) => typedVin.length >= 17),
    distinctUntilChanged(),
    switchMap((typedVin) => this.DashboardService.getVehiclesData(typedVin)),
    map((selectVin)=> this.items = selectVin),
    );
  vehiclesData = merge(this.noVehiclesData$, this.filterByInput$);

  constructor(private DashboardService: DashboardService) {}

  ngOnInit(): void {
    this.vehiclesSubscripition = this.DashboardService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
    });
    this.vehiclesModelDataSubscripition = this.DashboardService.getVehiclesData().subscribe((data) => {
      this.vehiclesModelData = data;
    });
  }

  ngOnDestroy(): void {
    this.vehiclesSubscripition.unsubscribe();
    this.vehiclesModelDataSubscripition.unsubscribe();
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
    this.items = [this.vehiclesModelData[id]];
  }

}
