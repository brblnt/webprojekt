import { FC, useCallback, useState } from "react";
import {
  FormControl,
  Input,
  Stack,
  Button,
  Checkbox,
  Center,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  FormLabel,
} from "@chakra-ui/react";
import { AccommodationItemProps } from "../Accommodation/components/AccommodationItem";
import { roomTypeOptions } from "../../constants/roomType";

export const RoomCreatePage: FC<AccommodationItemProps> = ({
  accommodation,
}) => {
  const [formData, setFormData] = useState({
    roomType: [],
    roomNumber: "",
    numberOfRooms: "",
    numberOfSingleBeds: "",
    numberOfDoubleBeds: "",
    hasOwnKitchen: false,
    hasOwnBathroom: false,
    active: true,
    priceOfADay: "",
    roomDetail: "",
  });

  const {
    roomType,
    roomNumber,
    numberOfRooms,
    numberOfSingleBeds,
    numberOfDoubleBeds,
    hasOwnKitchen,
    hasOwnBathroom,
    priceOfADay,
    roomDetail,
  } = formData;

  const onChange = useCallback((e: any) => {
    if (e.target) {
      if (e.target && e.target.type === "checkbox") {
        const { name, checked } = e.target;
        console.log(`Value of ${name}:`, checked);
        setFormData((prevState: any) => ({
          ...prevState,
          [name]: checked,
        }));
      } else {
        const { name, value } = e.target;
        console.log(`Value of ${name}:`, value);
        setFormData((prevState: any) => ({
          ...prevState,
          [name]: value,
        }));
      }
    }
  }, []);

  return (
    <>
      <FormControl id="roomNumber">
        <Text>Room creation for {accommodation.accommodationName}</Text>
        <FormLabel mb={0} mt={3}>
          Room Number
        </FormLabel>
        <NumberInput
          min={0}
          rounded="md"
          value={roomNumber}
          onChange={(_, valueAsNumber) =>
            onChange({ target: { name: "roomNumber", value: valueAsNumber } })
          }
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl id="roomType">
        <FormLabel mb={0}>Room Type</FormLabel>
        <Select
          placeholder="Select Service Type"
          id="roomType"
          value={roomType}
          focusBorderColor="pink.300"
          rounded="md"
          borderBottomLeftRadius="0"
          borderBottomRightRadius="0"
          name="roomType"
          onChange={onChange}
        >
          {roomTypeOptions.map((type, index) => (
            <option key={index} value={type.value}>
              {type.text}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl id="roomNum" marginBottom={3}>
        <FormLabel>Number of Rooms</FormLabel>
        <NumberInput
          defaultValue={1}
          min={1}
          value={numberOfRooms}
          onChange={(_, valueAsNumber) =>
            onChange({
              target: { name: "numberOfRooms", value: valueAsNumber },
            })
          }
        >
          <NumberInputField name="numberOfRooms" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl id="singleBedNum" marginBottom={3}>
        <Center>
          <Text>Number of Single Beds</Text>
        </Center>
        <NumberInput
          defaultValue={0}
          min={0}
          value={numberOfSingleBeds}
          onChange={(_, valueAsNumber) =>
            onChange({
              target: { name: "numberOfSingleBeds", value: valueAsNumber },
            })
          }
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl id="accommodationName" marginBottom={3}>
        <Center>
          <Text>Number of Double Beds</Text>
        </Center>
        <NumberInput
          defaultValue={0}
          min={0}
          value={numberOfDoubleBeds}
          onChange={(_, valueAsNumber) =>
            onChange({
              target: { name: "numberOfDoubleBeds", value: valueAsNumber },
            })
          }
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <Center marginTop={3}>
        <Stack spacing={5} direction="row" my={3}>
          <Checkbox
            colorScheme="pink"
            name="hasOwnKitchen"
            checked={hasOwnKitchen}
            onChange={onChange}
          >
            Has Own Kitchen
          </Checkbox>
          <Checkbox
            colorScheme="pink"
            name="hasOwnBathroom"
            checked={hasOwnBathroom}
            onChange={onChange}
          >
            Has Own Bathroom
          </Checkbox>
        </Stack>
      </Center>
      <FormControl id="priceOfDay" marginBottom={3}>
        <Center>
          <Text>Price Of Day</Text>
        </Center>
        <NumberInput
          defaultValue={0}
          min={0}
          marginBottom={3}
          value={priceOfADay}
          onChange={(_, valueAsNumber) =>
            onChange({ target: { name: "priceOfADay", value: valueAsNumber } })
          }
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl id="roomOther">
        <Input
          type="text"
          placeholder="Room Detail"
          value={roomDetail}
          rounded="md"
          borderBottomLeftRadius="0"
          borderBottomRightRadius="0"
          name="roomDetail"
          onChange={onChange}
        />
      </FormControl>
      <Center>
        <Button variant="solid" colorScheme={"pink"} mt={3}>
          Add Room
        </Button>
      </Center>
    </>
  );
};
