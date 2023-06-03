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

export type Grade = {
  id: number,
  wave: number,
  parcial_one: number,
  parcial_two: number,
  parcial_three: number
}

export type GradeCreationData = Omit<Grade, "id">