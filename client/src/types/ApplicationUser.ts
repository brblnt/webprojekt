import { AuthenticationData } from "./AuthenticationData";

export type ApplicationUser = {
  id: number;
  authenticationData: AuthenticationData;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
}