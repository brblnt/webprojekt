import { Role } from "./enums/Role";

export type AuthenticationData = {
  id: number;
  username: string;
  // password: string;
  role: Role;
  registrationDate: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  accountCredentialsNonExpired: boolean;
  accountEnabled: boolean;
  // permission: Permission;
}