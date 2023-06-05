import React, { FC, useState } from "react";
import { Booking } from "../../../types/Booking";
import {
  FormControl,
  Input,
  FormLabel,
  Select,
  Button,
  Center
} from "@chakra-ui/react";

export interface BookingEditFormProps {
  booking: any;
  onUpdate: (updatedBooking: Booking) => void;
}

export const BookingUpdateForm: FC<BookingEditFormProps> = ({
  booking,
  onUpdate,
}) => {
  const [dateStart, setDateStart] = useState(booking.dateStart);
  const [dateFinish, setDateFinish] = useState(booking.dateFinish);
  const [serviceType, setServiceType] = useState(booking.serviceType);

  const dateStartChange = (e: any) => {
    setDateStart(e.target.value);
  };

  const dateFinishChange = (e: any) => {
    setDateFinish(e.target.value);
  };

  const serviceTypeChange = (e: any) => {
    setServiceType(e.target.value);
  };

  const handleUpdate = () => {
    const updatedBooking: Booking = {
      ...booking,

      dateStart: dateStart,
      dateFinish: dateFinish,
      serviceType: serviceType,
    };

    onUpdate(updatedBooking);
  };

  return (
    <>
      <FormControl id="dateStart">
        <FormLabel mb={0} mt={3}>
          Date Start
        </FormLabel>
        <Input
          rounded="md"
          value={dateStart}
          onChange={dateStartChange}
          type="date"
        />
      </FormControl>

      <FormControl id="dateFinish">
        <FormLabel mb={0} mt={3}>
          Date Finish
        </FormLabel>
        <Input
          rounded="md"
          value={dateFinish}
          onChange={dateFinishChange}
          type="date"
        />
      </FormControl>

      <FormControl id="serviceType">
        <FormLabel mb={0}>Service Type</FormLabel>
        <Select value={serviceType} onChange={serviceTypeChange}>
          <option value="FEL_PANZIO">Fél Panzió</option>
          <option value="TELJES_PANZIO">Teljes Panzió</option>
          <option value="NINCS_ELLATAS">Nincs Ellátás</option>
        </Select>
      </FormControl>
      <Center>
        <Button variant="solid" onClick={handleUpdate} colorScheme={"pink"} mt={3}>
          Update Data
        </Button>
      </Center>
    </>
  );
};
