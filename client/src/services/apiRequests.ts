import { Accommodation } from "../types/Accommodation";
import { ApplicationUser } from "../types/ApplicationUser";
import { AuthenticationData } from "../types/AuthenticationData";
import { Booking } from "../types/Booking";
import { Room } from "../types/Room";
import { apiClient } from "./apiClient";

export const getAllAccommodations = async (): Promise<Accommodation[]> => {
  return apiClient<Accommodation[]>(`/hotel-booking/accommodation`);
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

export const getAllApplicationUsers = async (): Promise<ApplicationUser[]> => {
  return apiClient<ApplicationUser[]>(`/hotel-booking/application-user`);
};

export const getApplicationUserById = async (applicationUser_id: number): Promise<ApplicationUser> => {
  return apiClient<ApplicationUser>(`/hotel-booking/application-user/${applicationUser_id}`);
};

export const getAllAuthentications = async (): Promise<AuthenticationData[]> => {
  return apiClient<AuthenticationData[]>(`/hotel-booking/authentication`);
};

export const getAuthenticationById = async (authentication_id: number): Promise<AuthenticationData> => {
  return apiClient<AuthenticationData>(`/hotel-booking/authentication/${authentication_id}`);
};

export const getAllBookings = async (): Promise<Booking[]> => {
  return apiClient<Booking[]>(`/hotel-booking/booking`);
}

/*export const getBookingById = async (booking_id: number): Promise<Booking> => {
  return apiClient<Booking>(`/hotel-booking/booking/application-user/${booking_id}`);
};*/