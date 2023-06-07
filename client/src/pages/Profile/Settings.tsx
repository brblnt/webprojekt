import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ApplicationUser } from "../../types/ApplicationUser";
import { remove, update as updateUser } from "../../features/user/userSlice";
import {
  logout,
  update as updateAuth,
  uploadFile,
} from "../../features/auth/authSlice";
import { AuthenticationData } from "../../types/AuthenticationData";

export const Settings = () => {
  const { user } = useSelector(
    (state: { auth: { user: ApplicationUser } }) => state.auth
  );
  const token = user.authenticationData.token;

  const dispatch = useDispatch();
  const [file, setFile] = useState<File>();
  const [password, setPassword] = useState(user.authenticationData.password);
  const [userName, setUserName] = useState(user.authenticationData.userName);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [emailAddress, setEmailAddress] = useState(user.emailAddress);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const navigate = useNavigate();

  const fileChange = (e: any) => {
    setFile(e.target.files && e.target.files[0]);
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

  const handlePictureChange = async (e: any) => {
    if (file) {
      const fileName = Date.now() + "_" + file.name;
      const formData = new FormData();
      formData.append("file", file, fileName);
      formData.append("token", token);
      console.log(formData);

      if (user) {
        const updatedAuth = {
          ...user.authenticationData,
          imgPath: user.authenticationData.imgPath
            ? [...user.authenticationData.imgPath, fileName]
            : [fileName],
        };
        try {
          await dispatch(uploadFile(formData) as any);
          console.log(formData);
          await dispatch(updateAuth(updatedAuth) as any);
        } catch (error) {
          console.log(error);
        }
      }
    }
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
    };
    await dispatch(updateAuth(updatedAuth) as any);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteConfirm = () => {
    onOpen();
  };

  const handleDelete = async () => {
    const userData = user;
    dispatch(remove({ userData, token }) as any);
    dispatch(logout() as any);
    navigate("/login");
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
                    <Input type={"file"} mb={3} onChange={fileChange} />
                    <Button
                      mb={3}
                      bg="pink.400"
                      color="white"
                      _hover={{
                        bg: "pink.300",
                      }}
                      rounded="md"
                      w="100%"
                      onClick={handlePictureChange}
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
                  <FormControl>
                    <Button
                      mt={3}
                      mb={3}
                      colorScheme={"red"}
                      rounded="md"
                      w="100%"
                      onClick={handleDeleteConfirm}
                    >
                      Delete User
                    </Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>
                          Are you sure you want to delete your account?
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Button
                            mb={3}
                            colorScheme={"red"}
                            rounded="md"
                            w="100%"
                            onClick={handleDelete}
                          >
                            Delete User
                          </Button>
                          <Button
                            colorScheme="blue"
                            rounded="md"
                            w="100%"
                            mb={3}
                            onClick={onClose}
                          >
                            No
                          </Button>
                        </ModalBody>
                      </ModalContent>
                    </Modal>
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
