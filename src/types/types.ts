export type Surfer = {
  number: number,
  name: string,
  country: string
}

export type Battery = {
  id: number,
  surferOne: number,
  surferTwo: number
}

export type BatteryCreationData = Omit<Battery, "id">

export type Wave = {
  id: number,
  battery: number,
  surfer: number
}

export type WaveCreationData = Omit<Wave, "id">