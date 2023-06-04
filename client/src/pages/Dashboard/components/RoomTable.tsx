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
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { getAllRooms } from "../../../services/apiRequests";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Room } from "../../../types/Room";
import { RoomEditForm } from "./RoomEditForm";
import { useDispatch } from "react-redux";
import { removeRoom, updateRoom } from "../../../features/room/roomSlice";

export const RoomTableRow = ({
  room,
  onDelete,
  onUpdate,
}: {
  room: Room;
  onDelete: () => void;
  onUpdate: (updatedRoom: Room) => void;
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
    const roomId = room.id.toString();
    await dispatch(removeRoom(roomId) as any);
    onDelete();
  };

  return (
    <>
      <Tr>
        <Td>{room.id}</Td>
        <Td>{room.roomType}</Td>
        <Td>{room.numberOfRooms}</Td>
        <Td>{room.numberOfSingleBeds}</Td>
        <Td>{room.numberOfDoubleBeds}</Td>
        <Td>{formatBooleanValue(room.hasOwnKitchen)}</Td>
        <Td>{formatBooleanValue(room.hasOwnBathroom)}</Td>
        <Td>{formatBooleanValue(room.active)}</Td>
        <Td>{room.priceOfADay}</Td>
        <Td>{room.roomDetail}</Td>
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
          <ModalHeader>Update Room</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RoomEditForm room={room} onUpdate={onUpdate} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const RoomTable = () => {
  const [rooms, setRooms] = useState<Room[] | null>(null);

  const loadRooms = async () => {
    const rooms = await getAllRooms();
    setRooms(rooms);
  };
  const dispatch = useDispatch();

  const handleUpdate = async (updatedRoom: Room) => {
    await dispatch(updateRoom(updatedRoom) as any);
    loadRooms();
  };

  useEffect(() => {
    loadRooms();
  }, []);

  return (
    <Box>
      <Center>
        <Text>Room Table</Text>
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
              <Th>Room Type</Th>
              <Th>Rooms</Th>
              <Th>Single Beds</Th>
              <Th>Double Beds</Th>
              <Th>Has Kitchen</Th>
              <Th>Has Bathroom</Th>
              <Th>Active</Th>
              <Th>Price Of A Day</Th>
              <Th>Other</Th>
              <Th>DELETE</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {rooms?.map((room) => {
              return (
                <RoomTableRow
                  key={room.id}
                  room={room}
                  onDelete={() => loadRooms()}
                  onUpdate={handleUpdate}
                />
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Id</Th>
              <Th>Room Type</Th>
              <Th>Rooms</Th>
              <Th>Single Beds</Th>
              <Th>Double Beds</Th>
              <Th>Has Kitchen</Th>
              <Th>Has Bathroom</Th>
              <Th>Active</Th>
              <Th>Price Of A Day</Th>
              <Th>Other</Th>
              <Th>DELETE</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
