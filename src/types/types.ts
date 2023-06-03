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