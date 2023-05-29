import React, { useCallback, useState } from "react";
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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { create } from "../../features/accommodation/accommodationSlice";
import { everyCountry } from "../../constants/everyCountry";
import { accommodationTypeOptions } from "../../constants/accommodationType";
import { serviceTypeOptions } from "../../constants/serviceType";

export const RoomCreatePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, message } = useSelector((state: any) => {
    return state.auth;
  });

  const [formData, setFormData] = useState({
    accommodationName: "",
    emailAddress: "",
    phoneNumber: "",
    country: "",
    postalCode: "",
    cityName: "",
    addressName: "",
    other: "",
    accommodationType: "",
    serviceType: [],
    rooms: [],
    roomType: [],
    numberOfRooms: "",
    numberOfSingleBeds: "",
    numberOfDoubleBeds: "",
    hasOwnKitchen: false,
    hasOwnBathroom: false,
    active: "true",
    priceOfADay: "",
    roomDetail: ""
  });

  const { accommodationName,
    emailAddress,
    phoneNumber,
    country,
    postalCode,
    cityName,
    addressName,
    other,
    accommodationType,
    serviceType,
    rooms,
    roomType,
    numberOfRooms,
    numberOfSingleBeds,
    numberOfDoubleBeds,
    hasOwnKitchen,
    hasOwnBathroom,
    active,
    priceOfADay,
    roomDetail
  } = formData;

  const onChange = useCallback((e: any) => {
    if (e.target) {
      if (e.target && e.target.type === "checkbox") {
        const { name, checked } = e.target;
        console.log(`Value of ${name}:`, checked); // Add this line to log the value
        setFormData((prevState: any) => ({
          ...prevState,
          [name]: checked,
        }));
      } else {
        const { name, value } = e.target;
        console.log(`Value of ${name}:`, value); // Add this line to log the value
        setFormData((prevState: any) => ({
          ...prevState,
          [name]: value,
        }));
      }
    }
    
  }, []);
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    const roomData = {
      authenticationData: {
        id: 1
        },
      rooms: [
        {
          roomType: "LAKOSZTALY",
          numberOfRooms,
          numberOfSingleBeds,
          numberOfDoubleBeds,
          hasOwnKitchen,
          hasOwnBathroom,
          active,
          priceOfADay,
          roomDetail,
        }
      ],
    };
    dispatch(create(roomData) as any);
  };

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl">{user && user.accommodationName ? 'Room creation for ' + user.accommodationName : ''} </Heading>
          </Stack>
          <Container maxW="7xl" p={{ base: 5, md: 10 }}>
            <Stack spacing={4}>
              <VStack
                as="form"
                spacing={8}
                w={{ base: "sm", sm: "lg" }}
                p={{ base: 5, sm: 6 }}
                onSubmit={onSubmit}
              >
                
                
                <Stack spacing={4}>
              <VStack
                as="form"
                spacing={8}
                w={{ base: "sm", sm: "lg" }}
                p={{ base: 5, sm: 6 }}
              >
                <VStack spacing={0} w="100%">
                  <FormControl id="roomNum" marginBottom={3}>
                  <Center>
                  <Text>Number of Rooms</Text>
                </Center>
                <NumberInput defaultValue={1} min={1} onChange={(_, valueAsNumber) => onChange({ target: { name: "numberOfRooms", value: valueAsNumber } })}>
                  <NumberInputField/>
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
                    <NumberInput defaultValue={0} min={0} onChange={(_, valueAsNumber) => onChange({ target: { name: "numberOfSingleBeds", value: valueAsNumber } })}>
                    <NumberInputField/>
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
                    <NumberInput defaultValue={0} min={0} onChange={(_, valueAsNumber) => onChange({ target: { name: "numberOfDoubleBeds", value: valueAsNumber } })}>
                      <NumberInputField/>
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
                        isChecked={hasOwnKitchen} // bind to the hasOwnKitchen value in formData
                        name="hasOwnKitchen" // set the name to match the corresponding key in formData
                        onChange={onChange}
                      >
                        Has Own Kitchen
                      </Checkbox>
                      <Checkbox
                        colorScheme="pink"
                        isChecked={hasOwnBathroom} // bind to the hasOwnBathroom value in formData
                        name="hasOwnBathroom" // set the name to match the corresponding key in formData
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
                    <NumberInput defaultValue={0} min={0} marginBottom={3} onChange={(_, valueAsNumber) => onChange({ target: { name: "priceOfADay", value: valueAsNumber } })}>
                      <NumberInputField/>
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                  <FormControl id="roomDetail">
                    <Input
                      type="text"
                      placeholder="Other detail about the room"
                      value={roomDetail}
                      rounded="md"
                      borderTopLeftRadius="0"
                      borderTopRightRadius="0"
                      name="roomDetail"
                      onChange={onChange}
                    />
                  </FormControl>
                </VStack>
              </VStack>
            </Stack>
                <VStack w="100%">
                <Button
                  bg="pink.400"
                  color="white"
                  _hover={{
                    bg: "pink.300",
                  }}
                  rounded="md"
                  w="100%"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    onSubmit(e);
                  }}                
                >
                  Add Room
                </Button>

                </VStack>
                
              </VStack>
            </Stack>
          </Container>
        </Stack>
      </Center>
    </Container>
  );
};