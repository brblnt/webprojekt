import React, { useCallback, useState } from "react";

import {
  Container,
  FormControl,
  Input,
  Stack,
  Button,
  VStack,
  Checkbox,
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
import { everyCountry } from "../../constants/everyCountry";
import { accommodationTypeOptions } from "../../constants/accommodationType";
import { serviceTypeOptions } from "../../constants/serviceType";
import { Accommodation } from "../../types/Accommodation";
import { create } from '../../features/accommodation/accommodationSlice'
import { AnyIfEmpty, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AccommodationCreatePage = () => {

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
        setFormData((prevState) => ({
          ...prevState,
          [name]: checked,
        }));
      } else {
        const { name, value } = e.target;
        console.log(`Value of ${name}:`, value); // Add this line to log the value
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    }
    
  }, []);
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    const accommodationData = {
      id: "",
      authenticationData: {
        id: user.authenticationData.id,
      },
      accommodationName,
      address: {
        addressId: "2",
        country,
        city: {
          postalCode,
          cityName,
        },
        addressName,
        other,
      },
      emailAddress,
      phoneNumber,
      accommodationType,
      serviceTypes: [serviceType],
      rooms: [
        {
          roomId: "2",
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
    dispatch(create(accommodationData) as any);
  };

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl">{user && user.authenticationData.userName ? 'Accommodation creation for ' + user.authenticationData.userName : ''} </Heading>
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
                <VStack spacing={0} w="100%">
                  <FormControl id="accommodationName">
                    <Input
                      type="text"
                      placeholder="Accommodation Name"
                      value={accommodationName}
                      rounded="md"
                      borderBottomLeftRadius="0"
                      borderBottomRightRadius="0"
                      name="accommodationName"
                      onChange={onChange}
                    />
                  </FormControl>
                  <FormControl
                    id="accommodationEmail"
                    position="relative"
                    bottom="1px"
                  >
                    <Input
                      type="text"
                      placeholder="Email"
                      value={emailAddress}
                      rounded="none"
                      name="emailAddress"
                      onChange={onChange}
                    />
                  </FormControl>
                  <FormControl
                    id="accommodationPhone"
                    position="relative"
                    bottom="1px"
                  >
                    <Input
                      type="text"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      rounded="md"
                      borderTopLeftRadius="0"
                      borderTopRightRadius="0"
                      name="phoneNumber"
                      onChange={onChange}
                    />
                  </FormControl>
                </VStack>

                <VStack spacing={0} w="100%">
                  <FormControl id="accommodationCountry">
                    <Select
                      placeholder="Select country"
                      id="city"
                      value={country}
                      focusBorderColor="pink.300"
                      rounded="md"
                      borderBottomLeftRadius="0"
                      borderBottomRightRadius="0"
                      name="country"
                      onChange={onChange}
                    >
                      {everyCountry.map((country, index) => (
                        <option key={index} value={country.value}>
                          {country.text}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl
                    id="accommodationPostalCode"
                    position="relative"
                    bottom="1px"
                  >
                    <Input
                      type="text"
                      placeholder="Postal Code"
                      value={postalCode}
                      rounded="none"
                      name="postalCode"
                      onChange={onChange}
                    />
                  </FormControl>
                  <FormControl
                    id="accommodationCity"
                    position="relative"
                    bottom="1px"
                  >
                    <Input
                      type="text"
                      placeholder="City"
                      value={cityName}
                      rounded="none"
                      name="cityName"
                      onChange={onChange}
                    />
                  </FormControl>
                  <FormControl
                    id="accommodationAddress"
                    position="relative"
                    bottom="1px"
                  >
                    <Input
                      type="text"
                      placeholder="Address"
                      value={addressName}
                      rounded="none"
                      name="addressName"
                      onChange={onChange}
                    />
                  </FormControl>
                  <FormControl
                    id="accommodationOther"
                    position="relative"
                    bottom="1px"
                  >
                    <Input
                      type="text"
                      placeholder="Address Other"
                      value={other}
                      rounded="md"
                      borderTopLeftRadius="0"
                      borderTopRightRadius="0"
                      name="other"
                      onChange={onChange}
                    />
                  </FormControl>
                </VStack>
                <VStack spacing={0} w="100%">
                  <FormControl id="accommodationCountry">
                    <Select
                      placeholder="Select Accommodation Type"
                      id="city"
                      value={accommodationType}
                      focusBorderColor="pink.300"
                      rounded="md"
                      borderBottomLeftRadius="0"
                      borderBottomRightRadius="0"
                      name="accommodationType"
                      onChange={onChange}
                    >
                      {accommodationTypeOptions.map((type, index) => (
                        <option key={index} value={type.value}>
                          {type.text}
                        </option>
                      ))}
                    </Select>
                    <Center marginTop={3}>
                      <Stack spacing={5} direction="row">
                      <Select
                      placeholder="Select Service Type"
                      id="city"
                      value={serviceType}
                      focusBorderColor="pink.300"
                      rounded="md"
                      borderBottomLeftRadius="0"
                      borderBottomRightRadius="0"
                      name="serviceType"
                      onChange={onChange}
                    >
                      {serviceTypeOptions.map((type, index) => (
                        <option key={index} value={type.value}>
                          {type.text}
                        </option>
                      ))}
                    </Select>
                      </Stack>
                    </Center>
                  </FormControl>
                </VStack>
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
                  Post Accommodation
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
