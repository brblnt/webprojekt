import { Accommodation } from "../types/Accommodation";
import { Room } from "../types/Room";
import { apiClient } from "./apiClient";

export const getAllAccommodations = async (): Promise<Accommodation[]> => {
  return apiClient<Accommodation[]>(`/hotel-booking/accommodation`);
};

export const getAccommodationById = async (accommodation_id: number): Promise<Accommodation> => {
  return apiClient<Accommodation>(`/hotel-booking/accommodation/${accommodation_id}`);
};

export const getAllRooms = async (): Promise<Room[]> => {
  return apiClient<Room[]>(`/hotel-booking/room`);
};

export const getRoomById = async (accommodation_id: number): Promise<Room> => {
  return apiClient<Room>(`/hotel-booking/room/${accommodation_id}`);
};
