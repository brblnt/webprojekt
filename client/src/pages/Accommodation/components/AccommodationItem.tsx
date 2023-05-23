import { FC } from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { Accommodation } from "../../../types/Accommodation";
import { Link } from "react-router-dom";

export interface AccommodationItemProps {
  accommodation: Accommodation;
}

export const AccommodationItem: FC<AccommodationItemProps> = ({
  accommodation,
}) => {
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
          src={`https://www.rivierahotel.com/wp-content/uploads/2017/10/about-the-riv.jpg`}
          alt="product image"
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
              Rakjatok mar egy name,image stringet koszi puszi
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
      </Stack>
    </Stack>
  );
};
