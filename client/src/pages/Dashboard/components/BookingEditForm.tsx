import React, { FC, useState } from "react";
import { Booking } from "../../../types/Booking";
import {
  FormControl,
  Input,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export interface BookingEditFormProps {
  booking: Booking;
}

export const BookingEditForm: FC<BookingEditFormProps> = ({ booking }) => {
  const [userId, setUserId] = useState(booking.user.id);
  const [userName, setUserName] = useState(
    booking.user.authenticationData.userName
  );
  const [accId, setAccId] = useState(booking.accommodation.id);
  const [accName, setAccName] = useState(
    booking.accommodation.accommodationName
  );
  const [roomId, setRoomId] = useState(booking.room.id);
  const [roomType, setRoomType] = useState(booking.room.roomType);
  const [dateStart, setDateStart] = useState(booking.dateStart);
  const [dateFinish, setDateFinish] = useState(booking.dateFinish);
  const [serviceType, setServiceType] = useState(booking.serviceType);
  const [archived, setArchived] = useState(booking.archived);
  const [resigned, setResigned] = useState(booking.resigned);
  const [paid, setPaid] = useState(booking.payed);

  const userIdChange = (value: string) => {
    setUserId(Number(value));
  };

  const userNameChange = (e: any) => {
    setUserName(e.target.value);
  };

  const accIdChange = (value: string) => {
    setAccId(Number(value));
  };

  const accNameChange = (e: any) => {
    setAccName(e.target.value);
  };

  const roomIdChange = (value: string) => {
    setRoomId(Number(value));
  };

  const roomTypeChange = (e: any) => {
    setRoomType(e.target.value);
  };

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

  return (
    <>
      <FormControl id="userId">
        <FormLabel mb={0} mt={3}>
          User Id
        </FormLabel>
        <NumberInput rounded="md" value={userId} onChange={userIdChange} min={0}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl id="userName">
        <FormLabel mb={0} mt={3}>
          Username
        </FormLabel>
        <Input
          type="text"
          rounded="md"
          value={userName}
          onChange={userNameChange}
        />
      </FormControl>

      <FormControl id="accId">
        <FormLabel mb={0} mt={3}>
          Accomodation Id
        </FormLabel>
        <NumberInput rounded="md" value={accId} onChange={accIdChange} min={0}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl id="accName">
        <FormLabel mb={0} mt={3}>
          Accommodation Name
        </FormLabel>
        <Input
          type="text"
          rounded="md"
          value={accName}
          onChange={accNameChange}
        />
      </FormControl>

      <FormControl id="roomId">
        <FormLabel mb={0} mt={3}>
          Room Id
        </FormLabel>
        <NumberInput rounded="md" value={roomId} onChange={roomIdChange} min={0}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl id="roomType">
        <FormLabel mb={0}>Room Type</FormLabel>
        <Select value={roomType} onChange={roomTypeChange}>
          <option value="SZOBA">Szoba</option>
          <option value="LAKOSZTALY">Lakosztály</option>
        </Select>
      </FormControl>

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
    </>
  );
};
