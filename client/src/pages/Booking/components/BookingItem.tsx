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
} from "@chakra-ui/react";
import { Booking } from "../../../types/Booking";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ApplicationUser } from "../../../types/ApplicationUser";
import { Role } from "../../../types/enums/Role";

export interface BookingItemProps {
  booking: Booking;
}

export const BookingItem: FC<BookingItemProps> = ({ booking }) => {
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
          alt={`Booking Picture`}
        />
      </Flex>
      <Stack
        direction="column"
        spacing={2}
        w="100%"
        mt={{ base: "5px !important", sm: 0 }}
      >
        <Flex justify="space-between">
          <Link to={`/booking/${booking.id}`}>
            <chakra.h3
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              _hover={{
                color: "pink.300",
              }}
            >
              {booking.accommodation.accommodationName}
            </chakra.h3>
          </Link>

          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
            {booking.room.priceOfADay}$
          </chakra.h3>
        </Flex>
        <Box>
          <Text fontSize="lg" fontWeight="500">
            From: {booking.dateStart}
          </Text>
          <Text fontSize="lg" fontWeight="500">
            Until: {booking.dateFinish}
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="500">
            RoomNumber: {booking.room.roomNumber}
          </Text>
        </Box>

        <Flex alignItems="center" color="gray.500">
          <Text fontSize={{ base: "sm", sm: "md" }}>
            {booking.accommodation.emailAddress}
          </Text>
          <chakra.span mx={2} fontSize={{ base: "sm", sm: "md" }}>
            |
          </chakra.span>
          <Text fontSize={{ base: "sm", sm: "md" }}>
            {booking.accommodation.phoneNumber}
          </Text>
        </Flex>
        <Box display={{ base: "none", md: "unset" }}>
          <ButtonLayoutDesktop booking={booking} />
        </Box>
        <Box display={{ base: "unset", md: "none" }}>
          <ButtonLayoutMobile booking={booking} />
        </Box>
      </Stack>
    </Stack>
  );
};

export interface ButtonLayoutDesktopProps {
  booking: Booking;
}

export const ButtonLayoutDesktop: FC<ButtonLayoutDesktopProps> = ({
  booking,
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
      {(user.authenticationData.role === Role.APPLICATION_USER) && (
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-around"}
        >
          <Button onClick={openModal} w={"256px"} boxShadow={"dark-lg"}>
            Update
          </Button>
          <Button w={"256px"} colorScheme={"red"} boxShadow={"dark-lg"}>
            Cancel
          </Button>
        </Flex>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Booking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add the form or component for updating the booking */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export interface ButtonLayoutMobileProps {
  booking: Booking;
}

export const ButtonLayoutMobile: FC<ButtonLayoutMobileProps> = ({
  booking,
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
      {(user.authenticationData.role === Role.APPLICATION_USER) && (
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
            Update
          </Button>
          <Button
            w={"256px"}
            colorScheme={"red"}
            boxShadow={"dark-lg"}
            mb={3}
          >
            Cancel
          </Button>
        </Flex>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Booking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add the form or component for updating the booking */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
