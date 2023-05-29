import React from "react";

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

export const Settings = () => {
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
                    <Input type={"file"} mb={3} />
                    <Button
                      mb={3}
                      bg="pink.400"
                      color="white"
                      _hover={{
                        bg: "pink.300",
                      }}
                      rounded="md"
                      w="100%"
                    >
                      Upload Picture
                    </Button>
                  </FormControl>
                  <FormControl id="changeUsername">
                    <FormLabel>Username</FormLabel>
                    <Input
                      mb={3}
                      type="text"
                      placeholder="Change Username"
                      value={``}
                      rounded="md"
                      name="changeUsername"
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
                    >
                      Change Username
                    </Button>
                  </FormControl>
                  <FormControl id="changeEmail">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      mb={3}
                      type="text"
                      placeholder="Change Email"
                      value={``}
                      rounded="md"
                      name="changeEmail"
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
                    >
                      Change Email
                    </Button>
                  </FormControl>
                  <FormControl id="changePhoneNum">
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      mb={3}
                      type="text"
                      placeholder="Change Phone Number"
                      value={``}
                      rounded="md"
                      name="changePhoneNum"
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
                    >
                      Change Phone Number
                    </Button>
                  </FormControl>
                  <FormControl id="changePassword">
                    <FormLabel>Password</FormLabel>
                    <Input
                      mb={3}
                      type="password"
                      placeholder="Change Password"
                      value={``}
                      rounded="md"
                      name="changePassword"
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
                    >
                      Change Password
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
