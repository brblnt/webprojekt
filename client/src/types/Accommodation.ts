import { Address } from "./Address";
import { AuthenticationData } from "./AuthenticationData";
import { Room } from "./Room";
import { AccommodationType } from "./enums/AccommodationType";
import { ServiceType } from "./enums/ServiceType";

export type Accommodation = {
  id: number;
  authenticationData: AuthenticationData;
  accommodationName: string;
  address: Address;
  emailAddress: string;
  phoneNumber: string;
  accommodationType: AccommodationType;
  serviceTypes: ServiceType;
  rooms: Room[];
}