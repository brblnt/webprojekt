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
  booking: Booking;
  onUpdate: (updatedBooking: Booking) => void;
}

export const BookingEditForm: FC<BookingEditFormProps> = ({
  booking,
  onUpdate,
}) => {
  const [dateStart, setDateStart] = useState(booking.dateStart);
  const [dateFinish, setDateFinish] = useState(booking.dateFinish);
  const [serviceType, setServiceType] = useState(booking.serviceType);
  const [archived, setArchived] = useState(booking.archived);
  const [resigned, setResigned] = useState(booking.resigned);
  const [paid, setPaid] = useState(booking.paid);


  const dateStartChange = (e: any) => {
    setDateStart(e.target.value);
  };

  const dateFinishChange = (e: any) => {
    setDateFinish(e.target.value);
  };

  const serviceTypeChange = (e: any) => {
    setServiceType(e.target.value);
  };

  const archivedChange = (e: any) => {
    setArchived(e.target.value);
  };

  const resignedChange = (e: any) => {
    setResigned(e.target.value);
  };

  const paidChange = (e: any) => {
    setPaid(e.target.value);
  };

  const handleUpdate = () => {
    const updatedBooking: Booking = {
      ...booking,
      dateStart: dateStart,
      dateFinish: dateFinish,
      serviceType: serviceType,
      archived: archived,
      resigned: resigned,
      paid: paid,
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
          type="datetime-local"
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
          type="datetime-local"
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

      <FormControl id="archived">
        <FormLabel mb={0}>Archived</FormLabel>
        <Select value={archived.toString()} onChange={archivedChange}>
          <option value={true.toString()}>True</option>
          <option value={false.toString()}>False</option>
        </Select>
      </FormControl>

      <FormControl id="resigned">
        <FormLabel mb={0}>Resigned</FormLabel>
        <Select value={resigned.toString()} onChange={resignedChange}>
          <option value={true.toString()}>True</option>
          <option value={false.toString()}>False</option>
        </Select>
      </FormControl>

      <FormControl id="paid">
        <FormLabel mb={0}>Paid</FormLabel>
        <Select value={paid.toString()} onChange={paidChange}>
          <option value={true.toString()}>True</option>
          <option value={false.toString()}>False</option>
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
