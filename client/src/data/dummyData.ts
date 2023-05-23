import { Accommodation } from "../types/Accommodation";
import { AccommodationType } from "../types/enums/AccommodationType";
import { Role } from "../types/enums/Role";
import { RoomType } from "../types/enums/RoomType";
import { ServiceType } from "../types/enums/ServiceType";


export const accommodationList: Accommodation[] = [
  {
    id: 1,
    authenticationData: {
      id: 1,
      username: "Riviera Hotel and Casino",
      role: Role.ACCOMMODATION,
      registrationDate: "December 7, 2001",
      accountNonExpired: false,
      accountNonLocked: false,
      accountCredentialsNonExpired: false,
      accountEnabled: false,
    },
    address: {
      addressId: 1,
      country: "USA",
      city: {
        postalCode: "89109",
        cityName: "Las Vegas",
      },
      address: "2901 South Las Vegas Boulevard",
      other: "Ocean 11",
    },
    emailAddress: "rivierahotel@gmail.com",
    phoneNumber: "(702) 734-5110",
    accommodationType: AccommodationType.SZALLODA,
    serviceTypes: ServiceType.TELJES_PANZIO,
    rooms: [
      {
        id: 1,
        roomType: RoomType.LAKOSZTALY,
        numberOfRooms: 2,
        numberOfSingleBeds: 1,
        numberOfDoubleBeds: 0,
        hasOwnKitchen: true,
        hasOwnBathroom: true,
        active: true,
        priceOfADay: 100,
        other: "",
      },
      {
        id: 2,
        roomType: RoomType.LAKOSZTALY,
        numberOfRooms: 2,
        numberOfSingleBeds: 1,
        numberOfDoubleBeds: 0,
        hasOwnKitchen: true,
        hasOwnBathroom: true,
        active: true,
        priceOfADay: 200,
        other: "",
      },
    ],
  },
  {
    id: 2,
    authenticationData: {
      id: 1,
      username: "Riviera Hotel and Casino",
      role: Role.ACCOMMODATION,
      registrationDate: "December 7, 2001",
      accountNonExpired: false,
      accountNonLocked: false,
      accountCredentialsNonExpired: false,
      accountEnabled: false,
    },
    address: {
      addressId: 1,
      country: "Hungary",
      city: {
        postalCode: "3922",
        cityName: "Taktaharkány",
      },
      address: "",
      other: "taktaharkány",
    },
    emailAddress: "taktageci@gmail.com",
    phoneNumber: "+36 70 942 5408",
    accommodationType: AccommodationType.MAGANSZALLASHELY,
    serviceTypes: ServiceType.NINCS_ELLATAS,
    rooms: [
      {
        id: 1,
        roomType: RoomType.LAKOSZTALY,
        numberOfRooms: 2,
        numberOfSingleBeds: 1,
        numberOfDoubleBeds: 0,
        hasOwnKitchen: true,
        hasOwnBathroom: true,
        active: true,
        priceOfADay: 5600,
        other: "",
      },
      {
        id: 2,
        roomType: RoomType.LAKOSZTALY,
        numberOfRooms: 2,
        numberOfSingleBeds: 1,
        numberOfDoubleBeds: 0,
        hasOwnKitchen: true,
        hasOwnBathroom: true,
        active: true,
        priceOfADay: 200,
        other: "",
      },
    ],
  },
];