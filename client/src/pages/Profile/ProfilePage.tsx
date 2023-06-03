import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ApplicationUser } from "../../types/ApplicationUser";
import { getApplicationUserById } from "../../services/apiRequests";
export const ProfilePage = () => {
  const { user } = useSelector(
    (state: { auth: { user: ApplicationUser } }) => state.auth
  );
  const [userP, setUser] = useState<ApplicationUser | null>(null);

  useEffect(() => {
    const loadUser = async (userId: any) => {
      const users = await getApplicationUserById(userId);
      setUser(users);
    };
    loadUser(user.id);
  }, [user.id]);

  return (
    <div>
      <Center py={6}>
        <Box
          bg={useColorModeValue("gray.100", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={`http://localhost:3010/hotel-booking/images/${userP?.authenticationData.imgPath && userP?.authenticationData.imgPath[0]}`}
            mb={4}
            pos={"relative"}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {userP && userP.firstName && userP.firstName}{" "}
            {userP && userP.lastName && userP.lastName}
          </Heading>
          <Text fontWeight={600} color={"pink.300"} mb={4}>
            {userP && userP.authenticationData.userName}
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Text px={2} py={1} fontWeight={"400"}>
              {userP && userP.emailAddress
                ? userP.emailAddress
                : "Email Not Provided"}
            </Text>
            <Text px={2} py={1} fontWeight={"400"}>
              {userP && userP.phoneNumber
                ? userP.phoneNumber
                : "Phone Number Not Provided"}
            </Text>
          </Stack>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Text px={2} py={1} fontWeight={"400"}>
              {userP && userP.authenticationData.role}
            </Text>
          </Stack>
        </Box>
      </Center>
    </div>
  );
};
