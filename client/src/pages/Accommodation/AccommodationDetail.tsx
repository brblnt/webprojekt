import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Accommodation } from "../../types/Accommodation";
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
import { getAccommodationById, getAllRooms } from "../../services/apiRequests";
import { Link } from "react-router-dom";
import { Room } from "../../types/Room";
import { BookingCreatePage } from "../Booking/BookingCreatePage";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationUser } from "../../types/ApplicationUser";
import { Role } from "../../types/enums/Role";
import { uploadFile } from "../../features/auth/authSlice";
import { update } from "../../features/accommodation/accommodationSlice";
import { AuthenticationData } from "../../types/AuthenticationData";
import { Address } from "../../types/Address";
import { AccommodationType } from "../../types/enums/AccommodationType";
import { ServiceType } from "../../types/enums/ServiceType";
import { RoomEditForm } from "../Dashboard/components/RoomEditForm";
import { removeRoom, updateRoom } from "../../features/room/roomSlice";

export const AccommodationDetail = () => {
  const { accommodationId } = useParams();
  const [accommodation, setAccommodation] = useState<Accommodation | null>(
    null
  );
  const [file, setFile] = useState<File>();

  const dispatch = useDispatch();

  const { user } = useSelector(
    (state: { auth: { user: ApplicationUser } }) => state.auth
  );

  useEffect(() => {
    const loadAccommodation = async (accommodation_id: number) => {
      const accommodation = await getAccommodationById(accommodation_id);
      setAccommodation(accommodation);
    };
    loadAccommodation(Number(accommodationId));
  }, [accommodationId]);

  const activeRoomCount =
    accommodation?.rooms.filter((room: Room) => room.active === true)?.length ??
    0;
  const {
    isOpen: isBookingOpen,
    onOpen: onBookingOpen,
    onClose: onBookingClose,
  } = useDisclosure();
  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();

  const openBookingModal = () => {
    onBookingOpen();
  };

  const openUpdateModal = () => {
    onUpdateOpen();
  };

  const fileChange = (e: any) => {
    setFile(e.target.files && e.target.files[0]);
  };

  const handlePictureChange = async (e: any) => {
    if (file) {
      const fileName = Date.now() + "_" + file.name;
      const formData = new FormData();
      formData.append("file", file, fileName);
      const updatedAccom: Accommodation = {
        ...accommodation,
        id: accommodation?.id as number,
        imagePath: fileName,
        authenticationData:
          accommodation?.authenticationData as AuthenticationData,
        accommodationName: accommodation?.accommodationName as string,
        address: accommodation?.address as Address,
        description: accommodation?.description as string,
        emailAddress: accommodation?.emailAddress as string,
        phoneNumber: accommodation?.phoneNumber as string,
        accommodationType:
          accommodation?.accommodationType as AccommodationType,
        serviceTypes: accommodation?.serviceTypes as ServiceType,
        rooms: accommodation?.rooms as Room[],
      };
      try {
        await dispatch(uploadFile(formData) as any);
        await dispatch(update(updatedAccom) as any);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [roomModals, setRoomModals] = useState<{ [roomId: number]: boolean }>({});

  const openUpdateRoomModal = (roomId: number) => {
    setRoomModals((prevModals) => ({
      ...prevModals,
      [roomId]: true,
    }));
  };

  const [rooms, setRooms] = useState<Room[] | null>(null);

  const loadRooms = async () => {
    const rooms = await getAllRooms();
    setRooms(rooms);
  };

  const isRoomModalOpen = (roomId: number) => roomModals[roomId] || false;

  const handleUpdate = async (updatedRoom: Room) => {
    await dispatch(updateRoom(updatedRoom) as any);
    loadRooms();
  };

  const handleDelete = async (roomid: number) => {
    const roomId = roomid.toString();
    await dispatch(removeRoom(roomId) as any);
    //onDelete();
  };

  return (
    <>
      {accommodation && (
        <Container maxW={"7xl"} my={5}>
          <Box>
            <Flex direction={"column"} gap={3}>
              <Image
                rounded={"md"}
                alt={`${accommodation.accommodationName} Image`}
                src={`http://localhost:3010/hotel-booking/images/${accommodation.imagePath}`}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Center mt={3}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "4xl", lg: "5xl" }}
                  >
                    {accommodation.accommodationName}
                  </Heading>
                </Center>
              </Box>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider borderColor={"gray.200"} />}
              >
                <Text fontSize={"lg"}>{accommodation.description}</Text>
                <Box>
                  <Center>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={"pink.300"}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Contacts
                    </Text>
                  </Center>
  
                  <SimpleGrid columns={2} spacing={10}>
                    <List spacing={2}>
                      <ListItem>Email</ListItem>
                      <ListItem>Phone</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>{accommodation.emailAddress}</ListItem>
                      <ListItem>{accommodation.phoneNumber}</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                <Box>
                  <Center>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={"pink.300"}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Address
                    </Text>
                  </Center>
                  <SimpleGrid columns={2} spacing={10}>
                    <List spacing={2}>
                      <ListItem>Country</ListItem>
                      <ListItem>City</ListItem>
                      <ListItem>Address</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>{accommodation.address.country}</ListItem>
                      <ListItem>{accommodation.address.city.cityName}</ListItem>
                      <ListItem>{accommodation.address.addressName}</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                <Box>
                  <Center>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={"pink.300"}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Rooms
                    </Text>
                  </Center>
                  <SimpleGrid columns={2} spacing={10} marginBottom={3}>
                    <List spacing={2}>
                      <ListItem>Available</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>{activeRoomCount}</ListItem>
                    </List>
                  </SimpleGrid>
                  {accommodation.rooms.map((room) => {
                    return (
                      <Box key={room.id}>
                        <SimpleGrid columns={3} spacing={10} marginBottom={3}>
                          <List spacing={2}>
                            <ListItem>
                              <Link to={`${room.id}`}>
                                <Text
                                  _hover={{
                                    color: "pink.300",
                                  }}
                                >
                                  {room.roomType} {room.roomNumber}
                                </Text>
                              </Link>
                            </ListItem>
                          </List>
                          <List spacing={2}>
                            <ListItem>${room.priceOfADay}</ListItem>
                          </List>
                          <Flex>
                            {accommodation.authenticationData.id === user.authenticationData.id && (
                              <>
                                <Button
                                  onClick={() => openUpdateRoomModal(room.id)}
                                  bg="pink.400"
                                  color="white"
                                  _hover={{
                                    bg: "pink.300",
                                  }}
                                  rounded="md"
                                >
                                  Update Room
                                </Button>
                                <Button
                                  bg="red.400"
                                  color="white"
                                  _hover={{
                                    bg: "red.300",
                                  }}
                                  onClick={() => handleDelete(room.id)}
                                  rounded="md"
                                  marginLeft={5}
                                >
                                  Delete Room
                                </Button>
                              </>
                            )}
                          </Flex>
                        </SimpleGrid>
                        <Modal
                          isOpen={isRoomModalOpen(room.id)}
                          onClose={() =>
                            setRoomModals((prevModals) => ({
                              ...prevModals,
                              [room.id]: false,
                            }))
                          }
                        >
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>Update Room</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <RoomEditForm
                                room={room}
                                onUpdate={handleUpdate}
                              />
                            </ModalBody>
                          </ModalContent>
                        </Modal>
                      </Box>
                    );
                  })}
                </Box>
  
                <VStack w="100%">
                  {accommodation.authenticationData.id ===
                  user.authenticationData.id ? (
                    <Button onClick={openUpdateModal}>Update</Button>
                  ) : (
                    <Button
                      bg="pink.400"
                      color="white"
                      _hover={{
                        bg: "pink.300",
                      }}
                      rounded="md"
                      w="100%"
                      onClick={openBookingModal}
                    >
                      Book Room
                    </Button>
                  )}
                  <Modal isOpen={isBookingOpen} onClose={onBookingClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Book Room</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <BookingCreatePage />
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                  <Modal isOpen={isUpdateOpen} onClose={onUpdateClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Book Room</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Input type={"file"} mb={3} onChange={fileChange} />
                        <Button
                          mb={3}
                          bg="pink.400"
                          color="white"
                          _hover={{
                            bg: "pink.300",
                          }}
                          rounded="md"
                          w="100%"
                          onClick={handlePictureChange}
                        >
                          Upload Picture
                        </Button>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </VStack>
              </Stack>
            </Stack>
          </Box>
        </Container>
      )}
    </>
  );  
};
