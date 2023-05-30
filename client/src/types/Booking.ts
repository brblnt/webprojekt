import { Accommodation } from "./Accommodation";
import { ApplicationUser } from "./ApplicationUser";
import { Room } from "./Room";
import { ServiceType } from "./enums/ServiceType";

export type Booking = {
  id: number;
  user: ApplicationUser;
  accommodation: Accommodation;
  room: Room;
  dateStart: string;
  dateFinish: string;
  serviceType: ServiceType;
  archived: boolean;
  resigned: boolean;
  paid: boolean;
  other: string;
}