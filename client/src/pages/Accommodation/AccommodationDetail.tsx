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
} from "@chakra-ui/react";
import { getAccommodationById } from "../../services/apiRequests";
import { Link } from "react-router-dom";
import { Room } from "../../types/Room";
import { BookingCreatePage } from "../Booking/BookingCreatePage";

export const AccommodationDetail = () => {
  const { accommodationId } = useParams();
  const [accommodation, setAccommodation] = useState<Accommodation | null>(
    null
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openModal = () => {
    onOpen();
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
                src={
                  "https://www.fairmont.com/assets/0/104/3225/3230/3231/28b9e2d3-55ca-4007-9c8a-391d34d0bce0.jpeg"
                }
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
                <Text fontSize={"lg"}>accommodation.description</Text>
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
                        <SimpleGrid columns={2} spacing={10} marginBottom={3}>
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
                        </SimpleGrid>
                      </Box>
                    );
                  })}
                </Box>
                  <VStack w="100%">
                    <Button
                      bg="pink.400"
                      color="white"
                      _hover={{
                        bg: "pink.300",
                      }}
                      rounded="md"
                      w="100%"
                      onClick={openModal}
                    >
                      Book Room
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Book Room</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <BookingCreatePage />
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
