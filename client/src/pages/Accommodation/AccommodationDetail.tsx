import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { accommodationList } from "../../data/dummyData";
import { Accommodation } from "../../types/Accommodation";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { getAccommodationById } from "../../services/apiRequests";

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

  return (
    <div>
      {accommodation && (
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={8}
            py={5}
          >
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
              <Image
                rounded={"md"}
                alt={`${accommodation.accommodationName} Image`}
                src={
                  "https://www.fairmont.com/assets/0/104/3225/3230/3231/f93a3414-b5d1-42a1-8528-4cd5c48d79d3.jpeg"
                }
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {accommodation.accommodationName}
                </Heading>
                <Text color={"pink.300"} fontWeight={300} fontSize={"2xl"}>
                  {"$" +
                    accommodation.rooms.reduce(
                      (sum, room) => sum + room.priceOfADay,
                      0
                    ) /
                      accommodation.rooms.length}
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider borderColor={"gray.200"} />}
              >
                <Text fontSize={"lg"}>
                  Arra gondoltam lehetne valami desc string is. Meg nem tudom imgPath Array tobb kepnek???
                </Text>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={"pink.300"}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Contacts
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
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
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={"pink.300"}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Address
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>Country</ListItem>
                      <ListItem>City</ListItem>
                      <ListItem>Address</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>{accommodation.address.country}</ListItem>
                      <ListItem>{accommodation.address.city.cityName}</ListItem>
                      <ListItem>{accommodation.address.address}</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={"pink.300"}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Rooms
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      )}
    </div>
  );
};
