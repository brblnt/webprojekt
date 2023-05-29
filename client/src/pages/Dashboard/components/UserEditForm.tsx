import React, { FC, useState } from "react";
import { FormControl, Input, FormLabel, Select } from "@chakra-ui/react";
import { ApplicationUser } from "../../../types/ApplicationUser";

export interface UserEditFormProps {
  user: ApplicationUser;
}
export const UserEditForm: FC<UserEditFormProps> = ({ user }) => {
  const [userName, setUserName] = useState(user.authenticationData.userName);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [emailAddress, setEmailAddress] = useState(user.emailAddress);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [nonExpired, setNonExpired] = useState(user.authenticationData.accountNonExpired);
  const [nonLocked, setNonLocked] = useState(user.authenticationData.accountNonLocked);
  const [credNonExpired, setCredNonExpired] = useState(user.authenticationData.accountCredentialsNonExpired);
  const [enabled, setEnabled] = useState(user.authenticationData.accountEnabled);

  const userNameChange = (e: any) => {
    setUserName(e.target.value);
  };

  const firstNameChange = (e: any) => {
    setFirstName(e.target.value);
  };

  const lastNameChange = (e: any) => {
    setLastName(e.target.value);
  };

  const emailAddressChange = (e: any) => {
    setEmailAddress(e.target.value);
  };

  const phoneNumberChange = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const nonExpiredChange = (e: any) => {
    setNonExpired(e.target.value);
  };

  const nonLockedChange = (e: any) => {
    setNonLocked(e.target.value);
  };

  const credNonExpiredChange = (e: any) => {
    setCredNonExpired(e.target.value);
  };

  const enabledChange = (e: any) => {
    setEnabled(e.target.value);
  };

  return (
    <>
      <FormControl id="userName">
        <FormLabel mb={0}>Username</FormLabel>
        <Input
          type="text"
          rounded="md"
          value={userName}
          onChange={userNameChange}
        />
      </FormControl>
      <FormControl id="firstName">
        <FormLabel mb={0} mt={3}>
          First Name
        </FormLabel>
        <Input
          type="text"
          rounded="md"
          value={firstName}
          onChange={firstNameChange}
        />
      </FormControl>
      <FormLabel mb={0} mt={3}>
        Last Name
      </FormLabel>
      <FormControl id="lastName">
        <Input
          type="text"
          rounded="md"
          value={lastName}
          onChange={lastNameChange}
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel mb={0} mt={3}>
          Email Address
        </FormLabel>
        <Input
          type="text"
          rounded="md"
          value={emailAddress}
          onChange={emailAddressChange}
        />
      </FormControl>

      <FormControl id="phoneNumber">
        <FormLabel mb={0} mt={3}>
          Phone Number
        </FormLabel>
        <Input
          type="text"
          rounded="md"
          value={phoneNumber}
          onChange={phoneNumberChange}
        />
      </FormControl>

      <FormControl id="nonExpired">
        <FormLabel mb={0}>Non Expired</FormLabel>
        <Select value={nonExpired.toString()} onChange={nonExpiredChange}>
          <option value={true.toString()}>True</option>
          <option value={false.toString()}>False</option>
        </Select>
      </FormControl>

      <FormControl id="nonLocked">
        <FormLabel mb={0}>Non Locked</FormLabel>
        <Select value={nonLocked.toString()} onChange={nonLockedChange}>
          <option value={true.toString()}>True</option>
          <option value={false.toString()}>False</option>
        </Select>
      </FormControl>

      <FormControl id="credNonExpired">
        <FormLabel mb={0}>Credentials Non Expired</FormLabel>
        <Select value={credNonExpired.toString()} onChange={credNonExpiredChange}>
          <option value={true.toString()}>True</option>
          <option value={false.toString()}>False</option>
        </Select>
      </FormControl>

      <FormControl id="enabled">
        <FormLabel mb={0}>Enabled</FormLabel>
        <Select value={enabled.toString()} onChange={enabledChange}>
          <option value={true.toString()}>True</option>
          <option value={false.toString()}>False</option>
        </Select>
      </FormControl>
    </>
  );
};
