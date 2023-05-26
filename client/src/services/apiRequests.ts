import { Accommodation } from "../types/Accommodation";
import { apiClient } from "./apiClient";

export const getAllAccommodations = async (): Promise<Accommodation[]> => {
  return apiClient<Accommodation[]>(`/hotel-booking/accommodation`);
};


export const getAccommodationById = async (accommodation_id: number): Promise<Accommodation> => {
  return apiClient<Accommodation>(`/hotel-booking/accommodation/${accommodation_id}`);
};

