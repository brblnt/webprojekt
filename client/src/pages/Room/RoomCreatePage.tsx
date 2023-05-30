import React from "react";
import {
  Container,
  FormControl,
  Input,
  Stack,
  Button,
  VStack,
  Checkbox,
  Link,
  Center,
  Heading,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  FormLabel,
} from "@chakra-ui/react";

export const RoomCreatePage = () => {
  return (
    <>
      <FormControl id="roomNumber">
        <FormLabel mb={0} mt={3}>
          Room Number
        </FormLabel>
        <NumberInput min={0} rounded="md">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl id="roomType">
        <FormLabel mb={0}>Room Type</FormLabel>
        <Select>
          <option value="SZOBA">Szoba</option>
          <option value="LAKOSZTALY">Lakosztály</option>
        </Select>
      </FormControl>
      <FormControl id="roomNum" marginBottom={3}>
        <FormLabel>Number of Rooms</FormLabel>
        <NumberInput defaultValue={1} min={1}>
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
        <NumberInput rounded="md" min={0}>
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
        <NumberInput min={0} rounded="md">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl id="hasKitchen">
        <FormLabel mb={0}>Has Kitchen</FormLabel>
        <Select>
          <option value={true.toString()}>True</option>
          <option value={false.toString()}>False</option>
        </Select>
      </FormControl>
      <FormControl id="hasBathroom">
        <FormLabel mb={0}>Has Bathroom</FormLabel>
        <Select>
          <option value={true.toString()}>True</option>
          <option value={false.toString()}>False</option>
        </Select>
      </FormControl>
      <FormControl id="price">
        <FormLabel mb={0} mt={3}>
          Price Of A Day
        </FormLabel>
        <NumberInput rounded="md" min={0}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl id="roomDetail">
        <FormLabel mb={0} mt={3}>
          Room Detail
        </FormLabel>
        <Input type="text" rounded="md" />
      </FormControl>
      <Center>
        <Button variant="solid" colorScheme={"pink"} mt={3}>
          Add Room
        </Button>
      </Center>
    </>
  );
};