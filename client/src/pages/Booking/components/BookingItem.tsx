import { FC, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { ApplicationUser } from "../../../types/ApplicationUser";
import { Role } from "../../../types/enums/Role";
import { BookingEditForm } from "../../Dashboard/components/BookingEditForm";
import { getbookings, remove, update } from "../../../features/booking/bookingSlice";
import { getAllBookings } from "../../../services/apiRequests";
import { BookingUpdateForm } from "./BookingUpdateForm";
import { ServiceType } from "../../../types/enums/ServiceType";

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
          src={`http://localhost:3010/hotel-booking/images/${booking.accommodation.imagePath}`}
          alt={`${booking.accommodation.accommodationName} Picture`}
        />
      </Flex>
      <Stack
        direction="column"
        spacing={2}
        w="100%"
        mt={{ base: "5px !important", sm: 0 }}
      >
        <Flex justify="space-between">
          <Link to={`/accommodation/${booking.accommodation.id}`}>
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
            {booking.room.roomDetail}
          </Text>
          <Text fontSize="lg" fontWeight="500">
            {booking.accommodation.serviceTypes}
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

  const token = user.authenticationData.token

  const [bookings, setBookings] = useState<Booking[] | null>(null);

  const dispatch = useDispatch();

  const loadBookings = async () => {
    const bookings = await getAllBookings(token);
    setBookings(bookings);
  };

  const handleUpdate = async (updatedBooking: Booking) => {
    dispatch(update({updatedBooking, token}) as any);
    const bookUser = user
    await dispatch(getbookings(bookUser) as any);
    loadBookings();
  };

  const handleDelete = async () => {
    const bookingId = booking.id.toString();
    dispatch(remove({bookingId, token}) as any);
    const bookUser = user
    await dispatch(getbookings(bookUser) as any);
  };

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
          <Button w={"256px"} colorScheme={"red"} boxShadow={"dark-lg"} onClick={handleDelete}>
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
            <BookingUpdateForm booking={booking} onUpdate={handleUpdate}/>
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

  const token = user.authenticationData.token

  const [bookings, setBookings] = useState<Booking[] | null>(null);

  const dispatch = useDispatch();

  const loadBookings = async () => {
    const bookings = await getAllBookings();
    setBookings(bookings);
  };

  const handleUpdate = async (updatedBooking: Booking) => {
    dispatch(update({updatedBooking, token}) as any);
    const bookUser = user
    await dispatch(getbookings(bookUser) as any);
    loadBookings();
  };

  const handleDelete = async () => {
    const bookingId = booking.id.toString();
    dispatch(remove({bookingId, token}) as any);
    const bookUser = user
    await dispatch(getbookings(bookUser) as any);
  };

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
            onClick={handleDelete}
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
          <BookingUpdateForm booking={booking} onUpdate={handleUpdate}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
