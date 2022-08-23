export interface vehiclesData extends Array<vehicleData> {}

export interface vehicleData{
  id: number
  vim: string
  odometer: number | string
  tirePressure: number | string
  status: number | string
  batteryStatus: number | string
  fuelLevel: number | string
  lat: number | string
  long: number | string
}

export interface vehiclesDataAPI {
  vehiclesData: vehiclesData;
}