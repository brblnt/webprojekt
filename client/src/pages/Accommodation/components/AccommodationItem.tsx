import { FC } from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  Text,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Accommodation } from "../../../types/Accommodation";
import { Link } from "react-router-dom";
import { RoomCreatePage } from "../../Room/RoomCreatePage";
import { useSelector } from "react-redux";
import { ApplicationUser } from "../../../types/ApplicationUser";
import { Role } from "../../../types/enums/Role";

export interface AccommodationItemProps {
  accommodation: Accommodation;
}

export const AccommodationItem: FC<AccommodationItemProps> = ({
  accommodation,
}) => {
  const { user } = useSelector(
    (state: { auth: { user: ApplicationUser } }) => state.auth
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const openModal = () => {
    onOpen();
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
      mt={3}
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
            {accommodation.address.addressName}
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
        {(user.authenticationData.role === Role.ACCOMMODATION && (
          <Flex direction={"row"} justifyContent={"space-around"}>
            <Button onClick={openModal} w={"256px"}>
              Add Room
            </Button>
            <Button w={"256px"} colorScheme={"red"}>
              Delete
            </Button>
            <Button w={"256px"} colorScheme={"blue"}>
              Update
            </Button>
          </Flex>
        )) ||
          (user.authenticationData.role === Role.ADMIN && (
            <Flex direction={"row"} justifyContent={"space-around"}>
              <Button onClick={openModal} w={"256px"}>
                Add Room
              </Button>
              <Button w={"256px"} colorScheme={"red"}>
                Delete
              </Button>
              <Button w={"256px"} colorScheme={"blue"}>
                Update
              </Button>
            </Flex>
          ))}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Room</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <RoomCreatePage accommodation={accommodation}/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Stack>
    </Stack>
  );
};