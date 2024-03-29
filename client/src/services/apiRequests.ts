import { Accommodation } from "../types/Accommodation";
import { ApplicationUser } from "../types/ApplicationUser";
import { AuthenticationData } from "../types/AuthenticationData";
import { Booking } from "../types/Booking";
import { Room } from "../types/Room";
import { apiClient } from "./apiClient";

export const getAllAccommodations = async (
  token?: string
): Promise<Accommodation[]> => {
  return apiClient<Accommodation[]>(`/hotel-booking/accommodation`,
  token
  );
};

export const getAccommodationById = async (
  accommodation_id: number,
  token?: string
): Promise<Accommodation> => {
  return apiClient<Accommodation>(
    `/hotel-booking/accommodation/${accommodation_id}`,
    token
  );
};

export const getAllRooms = async (
  token?: string
): Promise<Room[]> => {
  return apiClient<Room[]>(`/hotel-booking/room`, token);
};

export const getRoomById = async (
  room_id: number,
  token?: string
): Promise<Room> => {
  return apiClient<Room>(`/hotel-booking/room/${room_id}`, token);
};

export const getAllApplicationUsers = async (
  token?: string
): Promise<ApplicationUser[]> => {
  return apiClient<ApplicationUser[]>(`/hotel-booking/application-user`, token);
};

export const getApplicationUserById = async (
  applicationUser_id: number,
  token?: string
  ): Promise<ApplicationUser> => {
  return apiClient<ApplicationUser>(`/hotel-booking/application-user/${applicationUser_id}`, token);
};

export const getAllAuthentications = async (
    token?: string
): Promise<AuthenticationData[]> => {
  return apiClient<AuthenticationData[]>(`/hotel-booking/authentication`, token);
};

export const getAuthenticationById = async (authentication_id: number): Promise<AuthenticationData> => {
  return apiClient<AuthenticationData>(`/hotel-booking/authentication/${authentication_id}`);
};

export const getAllBookings = async (
  token?: string
): Promise<Booking[]> => {
  return apiClient<Booking[]>(`/hotel-booking/booking`,
  token
  );
}

/*export const getBookingById = async (booking_id: number): Promise<Booking> => {
  return apiClient<Booking>(`/hotel-booking/booking/application-user/${booking_id}`);
};*/