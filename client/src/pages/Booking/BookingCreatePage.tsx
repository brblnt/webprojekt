import React, { useCallback, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { createBook } from "../../features/booking/bookingSlice";

export const BookingCreatePage = () => {

  const dispatch = useDispatch();

  const { user } = useSelector((state: any) => {
    return state.auth;
  });

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

  const [formData, setFormData] = useState({
    roomId:"",
    dateStart: "",
    dateFinish: "",
    serviceType: "",
    archived: true,
    resigned: false,
    paid: false,
    other: "",
  });

  const {
    roomId,
    dateStart,
    dateFinish,
    serviceType,
    other,
    archived,
    resigned,
    paid,
  } = formData;

  const onSubmit = (e: any) => {
    e.preventDefault();
    const bookData ={
      user: {
        id: user.id
      },
      accommodation: {
        id: accommodationId
      },
      room: {
        id: roomId
      },
      dateStart,
      dateFinish,
      serviceType,
      archived,
      resigned,
      paid,
      other
    };
    dispatch(createBook(bookData) as any)
  };


  const onChange = useCallback((e: any) => {
    if (e.target) {
      const { name, value } = e.target;
      console.log(`Value of ${name}:`, value); // Add this line to log the value
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }, []);

  return (
    <>
      <FormControl id="bookingDateStart">
        <FormLabel>Choose Room</FormLabel>
        <Select id="sortBy" focusBorderColor="pink.300"
          onChange={onChange}
          name="roomId"
          value={roomId}
          >
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
          type="date"
          onChange={onChange}
          name="dateStart"
          value={dateStart}
        />
      </FormControl>
      <FormControl id="bookingFinish">
        <FormLabel mt={3}>Finish Date</FormLabel>
        <Input
          placeholder="Select Finish Date"
          size="md"
          type="date"
          onChange={onChange}
          name="dateFinish"
          value={dateFinish}
        />
      </FormControl>
      <FormControl id="bookingServiceType">
        <FormLabel mt={3}>Start Service Type</FormLabel>
        <Select
          mt={3}
          id="serviceType"
          focusBorderColor="pink.300"
          placeholder={'Service Type'}
          onChange={onChange}
          name="serviceType"
          value={serviceType}
        >
          {serviceTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl id="Comment">
        <FormLabel mt={3}>Comment</FormLabel>
        <Input
          placeholder="Give additional comment if needed"
          size="md"
          type="text"
          onChange={onChange}
          name="other"
          value={other}
        />
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
        type="submit" onClick={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}>
        Post Booking
      </Button>
    </>
  );
};
