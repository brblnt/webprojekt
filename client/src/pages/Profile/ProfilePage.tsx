import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
} from "@chakra-ui/react";
export const ProfilePage = () => {
  return (
    <div>
      <Center py={6}>
        <Box
          bg={"gray.700"}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar size={"xl"} src={""} mb={4} pos={"relative"} />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            firstName lastName
          </Heading>
          <Text fontWeight={600} color={"pink.300"} mb={4}>
            userName
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Text px={2} py={1} fontWeight={"400"}>
              Email Address
            </Text>
            <Text px={2} py={1} fontWeight={"400"}>
              Phone Number
            </Text>
          </Stack>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Text px={2} py={1} fontWeight={"400"}>
              Role
            </Text>
          </Stack>
        </Box>
      </Center>
    </div>
  );
};