import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  FormControl,
  Input,
  Button,
  Select,
  FormLabel,
} from "@chakra-ui/react";
import { Accommodation } from "../../types/Accommodation";
import { getAccommodationById } from "../../services/apiRequests";
import { serviceTypeOptions } from "../../constants/serviceType";

export const BookingCreatePage = () => {
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

  const activeRooms = accommodation?.rooms.filter((room) => room.active);

  return (
    <>
      <FormControl id="bookingDateStart">
        <FormLabel>Choose Room</FormLabel>
        <Select id="sortBy" focusBorderColor="pink.300">
          {activeRooms?.map((option) => (
            <option key={option.id} value={option.id}>
              {option.roomDetail}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl id="bookingDateStart">
        <FormLabel mt={3}>Start Date</FormLabel>
        <Input
          placeholder="Select Start Date"
          size="md"
          type="datetime-local"
        />
      </FormControl>
      <FormControl id="bookingFinish">
        <FormLabel mt={3}>Finish Date</FormLabel>
        <Input
          placeholder="Select Finish Date"
          size="md"
          type="datetime-local"
        />
      </FormControl>
      <FormControl id="bookingServiceType">
        <FormLabel mt={3}>Start Service Type</FormLabel>
        <Select
          mt={3}
          id="serviceType"
          focusBorderColor="pink.300"
          placeholder={`Service Type`}
        >
          {serviceTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button
        mt={3}
        bg="pink.400"
        color="white"
        _hover={{
          bg: "pink.300",
        }}
        rounded="md"
        w="100%"
      >
        Post Booking
      </Button>
    </>
  );
};
