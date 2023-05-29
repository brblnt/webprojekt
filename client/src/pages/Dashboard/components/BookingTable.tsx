import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
  Text,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { getAllBookings } from "../../../services/apiRequests";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Booking } from "../../../types/Booking";
import { BookingEditForm } from "./BookingEditForm";
import { useDispatch } from "react-redux";
import { remove, update } from "../../../features/booking/bookingSlice";

export const BookingTableRow = ({
  booking,
  onDelete,
  onUpdate,
}: {
  booking: Booking;
  onDelete: () => void;
  onUpdate: (updatedBooking: Booking) => void;

}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = () => {
    onOpen();
  };

  const formatBooleanValue = (value: boolean) => {
    return value ? "True" : "False";
  };

  const dispatch = useDispatch();

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const bookingId = booking.id.toString();
    await dispatch(remove(bookingId) as any);
    onDelete();
  };

  return (
    <>
      <Tr>
        <Td>{booking.id}</Td>
        <Td>{booking.user.id}</Td>
        <Td>{booking.user.authenticationData.userName}</Td>
        <Td>{booking.accommodation.id}</Td>
        <Td>{booking.accommodation.accommodationName}</Td>
        <Td>{booking.room.id}</Td>
        <Td>{booking.room.roomType}</Td>
        <Td>{booking.dateStart}</Td>
        <Td>{booking.dateFinish}</Td>
        <Td>{booking.serviceType}</Td>
        <Td>{formatBooleanValue(booking.archived)}</Td>
        <Td>{formatBooleanValue(booking.resigned)}</Td>
        <Td>{formatBooleanValue(booking.paid)}</Td>
        <Td>
          <Button colorScheme={"red"} onClick={handleDelete}>
            <DeleteIcon />
          </Button>
        </Td>
        <Td>
          <Button onClick={handleEdit}>
            <EditIcon />
          </Button>
        </Td>
      </Tr>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Booking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BookingEditForm booking={booking} onUpdate={onUpdate}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const BookingTable = () => {
  const [bookings, setBookings] = useState<Booking[] | null>(null);

  const dispatch = useDispatch();


  const loadBookings = async () => {
    const bookings = await getAllBookings();
    setBookings(bookings);
  };

  const handleUpdate = async (updatedBooking: Booking) => {
    await dispatch(update(updatedBooking) as any);
    loadBookings();
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <Box>
      <Center>
        <Text>Booking Table</Text>
      </Center>
      <TableContainer
        maxWidth={"1800px"}
        maxHeight={"320px"}
        overflowY={"auto"}
        overflowX={"auto"}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>User Id</Th>
              <Th>Username</Th>
              <Th>Accommodation Id</Th>
              <Th>Accommodation Name</Th>
              <Th>Room Id</Th>
              <Th>Room Type</Th>
              <Th>Date Start</Th>
              <Th>Date Finish</Th>
              <Th>Service Type</Th>
              <Th>Archived</Th>
              <Th>Resigned</Th>
              <Th>Paid</Th>
              <Th>DELETE</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bookings?.map((booking) => {
              return (
                <BookingTableRow
                  key={booking.id}
                  booking={booking}
                  onDelete={() => loadBookings()}
                  onUpdate={handleUpdate}

                />
              );
            })}
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>Id</Th>
              <Th>User Id</Th>
              <Th>Username</Th>
              <Th>Accommodation Id</Th>
              <Th>Accommodation Name</Th>
              <Th>Room Id</Th>
              <Th>Room Type</Th>
              <Th>Date Start</Th>
              <Th>Date Finish</Th>
              <Th>Service Type</Th>
              <Th>Archived</Th>
              <Th>Resigned</Th>
              <Th>Paid</Th>
              <Th>DELETE</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
