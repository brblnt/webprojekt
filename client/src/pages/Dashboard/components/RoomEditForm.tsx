import React, { FC, useState } from "react";
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
  Button,
  Center
} from "@chakra-ui/react";
import { Room } from "../../../types/Room";

export interface RoomEditFormProps {
  room: Room;
  onUpdate: (updatedRoom: Room) => void;
}

export const RoomEditForm: FC<RoomEditFormProps> = ({ room, onUpdate }) => {
  const [roomType, setRoomType] = useState(room.roomType);
  const [roomsNum, setRoomsNum] = useState(room.numberOfRooms);
  const [singleBedNum, setSingleBedNum] = useState(room.numberOfSingleBeds);
  const [doubleBedNum, setDoubleBedNum] = useState(room.numberOfDoubleBeds);
  const [hasKitchen, setHasKitchen] = useState(room.hasOwnKitchen);
  const [hasBathroom, setHasBathroom] = useState(room.hasOwnBathroom);
  const [active, setActive] = useState(room.active);
  const [price, setPrice] = useState(room.priceOfADay);
  const [other, setOther] = useState(room.roomDetail);
  const [roomNumber, setRoomNumber] = useState(room.roomNumber);


  const roomTypeChange = (e: any) => {
    setRoomType(e.target.value);
  };

  const roomsNumChange = (value: string) => {
    setRoomsNum(Number(value));
  };

  const singleBedNumChange = (value: string) => {
    setSingleBedNum(Number(value));
  };

  const doubleBedNumChange = (value: string) => {
    setDoubleBedNum(Number(value));
  };

  const hasKitchenChange = (e: any) => {
    setHasKitchen(e.target.value);
  };

  const hasBathroomChange = (e: any) => {
    setHasBathroom(e.target.value);
  };

  const activeChange = (e: any) => {
    setActive(e.target.value);
  };

  const priceChange = (value: string) => {
    setPrice(Number(value));
  };

  const otherChange = (e: any) => {
    setOther(e.target.value);
  };

  const roomNumberChange = (value: string) => {
    setRoomNumber(Number(value));
  };

  const handleUpdate = () => {
    const updatedRoom: Room = {
      ...room,
      roomType: roomType,
      numberOfRooms: roomsNum,
      numberOfSingleBeds: singleBedNum,
      numberOfDoubleBeds: doubleBedNum,
      hasOwnKitchen: hasKitchen,
      hasOwnBathroom: hasBathroom,
      active: active,
      priceOfADay: price,
      roomDetail: other,
      roomNumber: roomNumber,
    };

    onUpdate(updatedRoom);
  };

  return (
    <>
      <FormControl id="roomType">
        <FormLabel mb={0}>Room Type</FormLabel>
        <Select value={roomType} onChange={roomTypeChange}>
          <option value="SZOBA">Szoba</option>
          <option value="LAKOSZTALY">Lakosztály</option>
        </Select>
      </FormControl>

      <FormControl id="roomsNum">
        <FormLabel mb={0} mt={3}>
          Number of Rooms
        </FormLabel>
        <NumberInput
          rounded="md"
          value={roomsNum}
          onChange={roomsNumChange}
          min={0}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl id="singleBedNum">
        <FormLabel mb={0} mt={3}>
          Number of Single Beds
        </FormLabel>
        <NumberInput
          rounded="md"
          value={singleBedNum}
          onChange={singleBedNumChange}
          min={0}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl id="doubleBedNum">
        <FormLabel mb={0} mt={3}>
          Number of Double Beds
        </FormLabel>
        <NumberInput
          min={0}
          rounded="md"
          value={doubleBedNum}
          onChange={doubleBedNumChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl id="hasKitchen">
        <FormLabel mb={0}>Has Kitchen</FormLabel>
        <Select value={hasKitchen.toString()} onChange={hasKitchenChange}>
          <option value={true.toString()}>True</option>
          <option value={false.toString()}>False</option>
        </Select>
      </FormControl>

      <FormControl id="hasBathroom">
        <FormLabel mb={0}>Has Bathroom</FormLabel>
        <Select value={hasBathroom.toString()} onChange={hasBathroomChange}>
          <option value={true.toString()}>True</option>
          <option value={false.toString()}>False</option>
        </Select>
      </FormControl>

      <FormControl id="active">
        <FormLabel mb={0}>Active</FormLabel>
        <Select value={active.toString()} onChange={activeChange}>
          <option value={true.toString()}>True</option>
          <option value={false.toString()}>False</option>
        </Select>
      </FormControl>

      <FormControl id="price">
        <FormLabel mb={0} mt={3}>
          Price Of A Day
        </FormLabel>
        <NumberInput rounded="md" value={price} onChange={priceChange}>
          min={0}
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl id="other">
        <FormLabel mb={0} mt={3}>
          Room Detail
        </FormLabel>
        <Input type="text" rounded="md" value={other} onChange={otherChange} />
      </FormControl>

      <FormControl id="roomNumber">
        <FormLabel mb={0} mt={3}>
          Room Number
        </FormLabel>
        <NumberInput
          min={0}
          rounded="md"
          value={roomNumber}
          onChange={roomNumberChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <Center>
        <Button variant="solid" onClick={handleUpdate} colorScheme={"pink"} mt={3}>
          Update Data
        </Button>
      </Center>
    </>
  );
};
