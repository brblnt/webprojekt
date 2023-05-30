import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  FormControl,
  Input,
  Stack,
  Button,
  VStack,
  Center,
  Heading,
  FormLabel,
} from "@chakra-ui/react";
import { ApplicationUser } from "../../types/ApplicationUser";
import { update as updateUser } from "../../features/user/userSlice";
import { update as updateAuth } from "../../features/auth/authSlice";
import { AuthenticationData } from "../../types/AuthenticationData";

export const Settings = () => {
  const { user } = useSelector((state: { auth: { user: ApplicationUser } }) => state.auth);
  
  const dispatch = useDispatch();
  const [pic, setPic] = useState(user.authenticationData.imgPath);
  const [password, setPassword] = useState(user.authenticationData.password);
  const [userName, setUserName] = useState(user.authenticationData.userName);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [emailAddress, setEmailAddress] = useState(user.emailAddress);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const picChange = (e: any) => {
    setPic(e.target.value);
  };

  const passwordChange = (e: any) => {
    setPassword(e.target.value);
  };

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

  const handleUserUpdate = async () => {
    const updatedUser: ApplicationUser = {
      ...user,
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
    };
    await dispatch(updateUser(updatedUser) as any);
  };

  const handleAuthUpdate = async () => {
    const updatedAuth: AuthenticationData = {
      ...user.authenticationData,
      userName: userName,
      password: password,
      imgPath: pic
    };
    await dispatch(updateAuth(updatedAuth) as any);
  };


  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl">Settings</Heading>
          </Stack>
          <Container maxW="7xl" p={{ base: 5, md: 10 }}>
            <Stack spacing={4}>
              <VStack
                as="form"
                spacing={8}
                w={{ base: "sm", sm: "lg" }}
                p={{ base: 5, sm: 6 }}
              >
                <VStack spacing={0} w="100%">
                  <FormControl id="uploadPic">
                    <FormLabel>Profile Picture</FormLabel>
                    <Input type={"file"} mb={3} onChange={picChange}/>
                    <Button
                      mb={3}
                      bg="pink.400"
                      color="white"
                      _hover={{
                        bg: "pink.300",
                      }}
                      rounded="md"
                      w="100%"
                      onClick={handleAuthUpdate}
                    >
                      Upload Picture
                    </Button>
                  </FormControl>
                  <FormControl id="changeUsername">
                    <FormLabel>Username</FormLabel>
                    <Input
                      mb={3}
                      type="text"
                      placeholder={userName}
                      rounded="md"
                      name="changeUsername"
                      onChange={userNameChange}
                    />
                    <Button
                      mb={3}
                      bg="pink.400"
                      color="white"
                      _hover={{
                        bg: "pink.300",
                      }}
                      rounded="md"
                      w="100%"
                      onClick={handleAuthUpdate}
                    >
                      Change Username
                    </Button>
                  </FormControl>
                  <FormControl id="changePassword">
                    <FormLabel>Password</FormLabel>
                    <Input
                      mb={3}
                      type="password"
                      placeholder="Password"
                      rounded="md"
                      name="changePassword"
                      onChange={passwordChange}
                    />
                    <Button
                      mb={3}
                      bg="pink.400"
                      color="white"
                      _hover={{
                        bg: "pink.300",
                      }}
                      rounded="md"
                      w="100%"
                      onClick={handleAuthUpdate}
                    >
                      Change Password
                    </Button>
                  </FormControl>
                  <FormControl id="changeEmail">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      mb={3}
                      type="text"
                      placeholder={emailAddress}
                      rounded="md"
                      name="changeEmail"
                      onChange={emailAddressChange}
                    />
                    <Button
                      mb={3}
                      bg="pink.400"
                      color="white"
                      _hover={{
                        bg: "pink.300",
                      }}
                      rounded="md"
                      w="100%"
                      onClick={handleUserUpdate}
                    >
                      Change Email
                    </Button>
                  </FormControl>
                  <FormControl id="changePhoneNum">
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      mb={3}
                      type="text"
                      placeholder={phoneNumber}
                      rounded="md"
                      name="changePhoneNum"
                      onChange={phoneNumberChange}
                    />
                    <Button
                      mb={3}
                      bg="pink.400"
                      color="white"
                      _hover={{
                        bg: "pink.300",
                      }}
                      rounded="md"
                      w="100%"
                      onClick={handleUserUpdate}
                    >
                      Change Phone Number
                    </Button>
                  </FormControl>
                  <FormControl id="firstName">
                    <FormLabel>First Name</FormLabel>
                    <Input
                      mb={3}
                      type="text"
                      placeholder={firstName}
                      rounded="md"
                      name="firstName"
                      onChange={firstNameChange}
                    />
                    <Button
                      mb={3}
                      bg="pink.400"
                      color="white"
                      _hover={{
                        bg: "pink.300",
                      }}
                      rounded="md"
                      w="100%"
                      onClick={handleUserUpdate}
                    >
                      Change First Name
                    </Button>
                  </FormControl>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      mb={3}
                      type="text"
                      placeholder={lastName}
                      rounded="md"
                      name="firstName"
                      onChange={lastNameChange}
                    />
                    <Button
                      mb={3}
                      bg="pink.400"
                      color="white"
                      _hover={{
                        bg: "pink.300",
                      }}
                      rounded="md"
                      w="100%"
                      onClick={handleUserUpdate}
                    >
                      Change Last Name
                    </Button>
                  </FormControl>
                </VStack>
              </VStack>
            </Stack>
          </Container>
        </Stack>
      </Center>
    </Container>
  );
};
