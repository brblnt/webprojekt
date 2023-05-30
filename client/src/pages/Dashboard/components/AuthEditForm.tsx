import React, { FC, useState } from "react";
import { AuthenticationData } from "../../../types/AuthenticationData";
import {
  FormControl,
  Input,
  FormLabel,
  Select,
  Button,
  Center,
} from "@chakra-ui/react";

export interface AuthEditFormProps {
  auth: AuthenticationData;
  onUpdate: (updatedAuth: AuthenticationData) => void;
}

export const AuthEditForm: FC<AuthEditFormProps> = ({ auth, onUpdate }) => {
  const [userName, setUserName] = useState(auth.userName);
  const [nonExpired, setNonExpired] = useState(auth.accountNonExpired);
  const [nonLocked, setNonLocked] = useState(auth.accountNonLocked);
  const [credNonExpired, setCredNonExpired] = useState(
    auth.accountCredentialsNonExpired
  );
  const [enabled, setEnabled] = useState(auth.accountEnabled);

  const userNameChange = (e: any) => {
    setUserName(e.target.value);
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

  const handleUpdate = () => {
    const updatedAuth: AuthenticationData = {
      ...auth,
      userName: userName,
      accountNonExpired: nonExpired,
      accountNonLocked: nonLocked,
      accountCredentialsNonExpired: credNonExpired,
      accountEnabled: enabled,
    };
    onUpdate(updatedAuth);
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
        <Select
          value={credNonExpired.toString()}
          onChange={credNonExpiredChange}
        >
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
      <Center>
        <Button
          variant="solid"
          onClick={handleUpdate}
          colorScheme={"pink"}
          mt={3}
        >
          Update Data
        </Button>
      </Center>
    </>
  );
};
