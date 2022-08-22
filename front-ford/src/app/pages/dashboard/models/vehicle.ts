export interface vehicles extends Array<vehicle> {}

export interface vehicle{
  id: number | string
  vehicle: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
}

export interface vehiclesAPI {
  vehicles: vehicles;
}
