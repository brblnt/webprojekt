import { FC } from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  Text,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";
import { Accommodation } from "../../../types/Accommodation";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRoom } from "../../../features/accommodation/accommodationSlice";
import { RoomCreatePage } from "../../Room/RoomCreatePage";

export interface AccommodationItemProps {
  accommodation: Accommodation;
}

export const AccommodationItem: FC<AccommodationItemProps> = ({
  accommodation,
}) => {

  const { user } = useSelector((state: { auth: { user: any } }) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onAdd = () => {
    const accommodationId = accommodation.id;
    navigate(`/accommodation/${accommodationId}/room/post`, { state: { accommodation } });
  };
  

  return (
    <Stack
      spacing={{ base: 0, md: 4 }}
      direction={{ base: "column", md: "row" }}
      border="1px solid"
      borderColor="gray.400"
      p={2}
      rounded="md"
      w={{ base: "auto", md: "7xl" }}
      overflow="hidden"
      pos="relative"
    >
      <Flex ml="0 !important">
        <Image
          rounded="md"
          w={{ base: "100%", md: "45rem" }}
          h="auto"
          objectFit="cover"
          src={`https://www.fairmont.com/assets/0/104/3225/3230/3231/28b9e2d3-55ca-4007-9c8a-391d34d0bce0.jpeg`}
          alt={`${accommodation.accommodationName} Picture`}
        />
      </Flex>
      <Stack
        direction="column"
        spacing={2}
        w="100%"
        mt={{ base: "5px !important", sm: 0 }}
      >
        <Flex justify="space-between">
          <Link to={`/accommodation/${accommodation.id}`}>
            <chakra.h3
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              _hover={{
                color: "pink.300",
              }}
            >
              {accommodation.accommodationName}
            </chakra.h3>
          </Link>

          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
            {"$" +
              accommodation.rooms.reduce(
                (sum, room) => sum + room.priceOfADay,
                0
              ) /
                accommodation.rooms.length}
          </chakra.h3>
        </Flex>
        <Box>
          <Text fontSize="lg" fontWeight="500">
            {accommodation.address.country}
          </Text>
          <Text fontSize="lg" fontWeight="500">
            {accommodation.address.city.cityName}
          </Text>
          <Text fontSize="lg" fontWeight="500">
            {accommodation.address.address}
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="500">
            {accommodation.accommodationType}
          </Text>
          <Text fontSize="lg" fontWeight="500">
            {accommodation.serviceTypes}
          </Text>
        </Box>

        <Flex alignItems="center" color="gray.500">
          <Text fontSize={{ base: "sm", sm: "md" }}>
            {accommodation.emailAddress}
          </Text>
          <chakra.span mx={2} fontSize={{ base: "sm", sm: "md" }}>
            |
          </chakra.span>
          <Text fontSize={{ base: "sm", sm: "md" }}>
            {accommodation.phoneNumber}
          </Text>
        </Flex>
        <Button
                  bg="pink.400"
                  color="white"
                  _hover={{
                    bg: "pink.300",
                  }}
                  rounded="md"
                  w="15%"
                  onClick={onAdd}            
                >
                  Add rooms
                </Button>
      </Stack>
    </Stack>
  );
};
