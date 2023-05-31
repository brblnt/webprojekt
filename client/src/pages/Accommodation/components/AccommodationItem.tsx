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
  useColorModeValue,
  Center,
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
  return (
    <Stack
      spacing={{ base: 0, md: 4 }}
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("gray.200", "gray.900")}
      boxShadow="dark-lg"
      color={useColorModeValue("black", "white")}
      p={2}
      rounded="md"
      w={{ base: "auto", md: "7xl" }}
      overflow="hidden"
      pos="relative"
      mt={3}
    >
      <Flex ml="0">
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
        <Box display={{ base: "none", md: "unset" }}>
          <ButtonLayoutDesktop accommodation={accommodation} />
        </Box>
        <Box display={{ base: "unset", md: "none" }}>
          <ButtonLayoutMobile accommodation={accommodation} />
        </Box>
      </Stack>
    </Stack>
  );
};

export interface ButtonLayoutDesktopProps {
  accommodation: Accommodation;
}

export const ButtonLayoutDesktop: FC<ButtonLayoutDesktopProps> = ({
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
    <Box>
      {(user.authenticationData.role === Role.ACCOMMODATION ||
        user.authenticationData.role === Role.ADMIN) && (
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-around"}
        >
          <Button onClick={openModal} w={"256px"} boxShadow={"dark-lg"}>
            Add Room
          </Button>
          <Button w={"256px"} colorScheme={"red"} boxShadow={"dark-lg"}>
            Delete
          </Button>
          <Button w={"256px"} colorScheme={"blue"} boxShadow={"dark-lg"}>
            Update
          </Button>
        </Flex>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Room</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RoomCreatePage accommodation={accommodation} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export interface ButtonLayoutMobileProps {
  accommodation: Accommodation;
}

export const ButtonLayoutMobile: FC<ButtonLayoutMobileProps> = ({
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
    <Box>
      {(user.authenticationData.role === Role.ACCOMMODATION ||
        user.authenticationData.role === Role.ADMIN) && (
        <Center>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-around"}
          >
            <Button
              onClick={openModal}
              w={"256px"}
              boxShadow={"dark-lg"}
              my={3}
            >
              Add Room
            </Button>
            <Button
              w={"256px"}
              colorScheme={"red"}
              boxShadow={"dark-lg"}
              mb={3}
            >
              Delete
            </Button>
            <Button
              w={"256px"}
              colorScheme={"blue"}
              boxShadow={"dark-lg"}
              mb={3}
            >
              Update
            </Button>
          </Flex>
        </Center>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Room</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RoomCreatePage accommodation={accommodation} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
