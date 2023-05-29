import { AccommodationType } from "./enums/AccommodationType";
import { ServiceType } from "./enums/ServiceType";

export type SearchQuery = {
  search: string;
  sortBy: string;
  country: string;
  city: string;
  accommodationType: AccommodationType | undefined;
  serviceType: ServiceType | undefined;
}