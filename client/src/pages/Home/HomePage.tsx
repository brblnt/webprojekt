import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../features/auth/authSlice";
import { getaccomms } from "../../features/accommodation/accommodationSlice";
import { AccommodationItem } from "../Accommodation/components/AccommodationItem";
import { Center, chakra, Flex } from "@chakra-ui/react";
export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => {
      console.log(state); // Log the Redux state
      return state.auth;
    }
  );

  const { accommodations } = useSelector((state: any) => {
    console.log(state); // Log the Redux state
    return state.accomm;
  });

  const authId = user.authenticationData.id;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!user) {
      navigate("/login");
      dispatch(logout() as any);
    } else {
      dispatch(getaccomms(authId) as any);
    }
  }, [user, navigate, isError, message, dispatch, authId]);

  return (
    <>
      {user && user.authenticationData.userName
        ? "Welcome " + user.authenticationData.userName
        : ""}

      <Center>
        {accommodations.length > 0 ? (
          <Flex direction={"column"} >
            {accommodations.map((accommodation: any) => (
              <AccommodationItem
                key={accommodation._id}
                accommodation={accommodation}
              />
            ))}
          </Flex>
        ) : (
          <chakra.h3>You have not created any accommodations</chakra.h3>
        )}
      </Center>
    </>
  );
};
