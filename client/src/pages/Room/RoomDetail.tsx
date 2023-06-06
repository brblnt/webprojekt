import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  VStack,
  Button,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Room } from "../../types/Room";
import { ApplicationUser } from "../../types/ApplicationUser";
import { getRoomById } from "../../services/apiRequests";
export const RoomDetail = () => {
  const { user } = useSelector(
    (state: { auth: { user: ApplicationUser } }) => state.auth
  );

  const token = user.authenticationData.token;

  const { roomId } = useParams();
  const [room, setRoom] = useState<Room | null>(null);
  useEffect(() => {
    const loadRoom = async (room_id: number, token: any) => {
      const room = await getRoomById(room_id, token);
      setRoom(room);
    };
    loadRoom(Number(roomId), token);
  }, [roomId]);

  const formatBooleanValue = (value: boolean | undefined) => {
    return value ? "True" : "False";
  };
  return (
    <Center mt={"8rem"}>
      <SimpleGrid columns={2} spacing={10}>
        <List spacing={2}>
          <ListItem>Room Number</ListItem>
          <ListItem>Room Type</ListItem>
          <ListItem>Has Bathroom</ListItem>
          <ListItem>Has Kitchen</ListItem>
          <ListItem>Number of Rooms</ListItem>
          <ListItem>Number of Double Beds</ListItem>
          <ListItem>Number of Single Beds</ListItem>
          <ListItem>Price of a Day</ListItem>
        </List>
        <List spacing={2}>
          <ListItem>{room?.roomNumber}</ListItem>
          <ListItem>{room?.roomType}</ListItem>
          <ListItem>{formatBooleanValue(room?.hasOwnBathroom)}</ListItem>
          <ListItem>{formatBooleanValue(room?.hasOwnKitchen)}</ListItem>
          <ListItem>{room?.numberOfRooms}</ListItem>
          <ListItem>{room?.numberOfDoubleBeds}</ListItem>
          <ListItem>{room?.numberOfSingleBeds}</ListItem>
          <ListItem>{room?.priceOfADay}</ListItem>
        </List>
      </SimpleGrid>
    </Center>
  );
};
