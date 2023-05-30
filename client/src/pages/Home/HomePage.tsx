import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../features/auth/authSlice";
import { getaccomms } from "../../features/accommodation/accommodationSlice";
import { AccommodationItem } from "../Accommodation/components/AccommodationItem";
import { Center, chakra, Flex, Box, Heading } from "@chakra-ui/react";
import { Accommodation } from "../../types/Accommodation";
export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, message } = useSelector(
    (state: any) => {
      console.log(state);
      return state.auth;
    }
  );

  const { accommodations } = useSelector((state: any) => {
    console.log(state);
    return state.accomm;
  });

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!user) {
      navigate("/login");
      dispatch(logout() as any);
    } else {
      const authId = user.authenticationData.id;
      dispatch(getaccomms(authId) as any);
    }
  }, [user, navigate, isError, message, dispatch]);

  return (
    <Box>
      <Center my={3}>
        <Heading>
          {user && user.authenticationData.userName
            ? "Welcome " + user.authenticationData.userName
            : ""}
        </Heading>
      </Center>

      <Center>
        {accommodations.length > 0 ? (
          <Flex direction={"column"}>
            {accommodations.map((accommodation: Accommodation) => (
              <AccommodationItem
                key={accommodation.id}
                accommodation={accommodation}
              />
            ))}
          </Flex>
        ) : (
          <chakra.h3>You have not created any accommodations</chakra.h3>
        )}
      </Center>
    </Box>
  );
};
