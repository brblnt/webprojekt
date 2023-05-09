import { City } from "./City";

export type Address = {
  addressId: number;
  country: string;
  city: City;
  address: string;
  other: string;
}