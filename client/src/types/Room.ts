import { RoomType } from "./enums/RoomType";

export type Room = {
  id: number;
  roomType: RoomType;
  numberOfRooms: number;
  numberOfSingleBeds: number;
  numberOfDoubleBeds: number;
  hasOwnKitchen: boolean;
  hasOwnBathroom: boolean;
  active: boolean;
  priceOfADay: number;
  other: string;
}