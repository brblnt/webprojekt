import { Role } from "./enums/Role";

// TODO: PERMISSION!!!
export type AuthenticationData = {
  id: number;
  userName: string;
  password: string;
  role: Role;
  imgPath?: string;
  registrationDate: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  accountCredentialsNonExpired: boolean;
  accountEnabled: boolean;
  // permission: Permission;
}