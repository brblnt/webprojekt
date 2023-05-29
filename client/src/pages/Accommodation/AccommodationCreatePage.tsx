import React, { useCallback, useState } from "react";

import {
  Container,
  FormControl,
  Input,
  Stack,
  Button,
  VStack,
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
    /*roomType: [],
    numberOfRooms: "",
    numberOfSingleBeds: "",
    numberOfDoubleBeds: "",
    hasOwnKitchen: "",
    hasOwnBathroom: "",
    active: "true",
    priceOfADay: "",*/
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
    rooms
    /*roomType,
    numberOfRooms,
    numberOfSingleBeds,
    numberOfDoubleBeds,
    hasOwnKitchen,
    hasOwnBathroom,
    active,
    priceOfADay*/
  } = formData;

  const onChange = useCallback((e: any) => {
    if (e.target) {
      const { name, value } = e.target;
      //console.log(`Value of ${name}:`, value); // Add this line to log the value
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }, []);
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    const accommodationData = {
      id: "",
      authenticationData: {
        id: user.authenticationData.id,
        userName: user.authenticationData.userName,
        password: user.authenticationData.password,
        role: user.authenticationDatarole,
        imgPath: "",
        registrationDate: user.authenticationData.registrationDate,
        accountNonExpired: user.authenticationData.accountNonExpired,
        accountNonLocked: user.authenticationData.accountNonLocked,
        accountCredentialsNonExpired: user.authenticationData.accountCredentialsNonExpired,
        accountEnabled: user.authenticationData.accountEnabled
      },
      accommodationName,
      address: {
        addressId: "",
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
      rooms /*[
        {
          id: "",
          roomType,
          numberOfRooms,
          numberOfSingleBeds,
          numberOfDoubleBeds,
          hasOwnKitchen,
          hasOwnBathroom,
          active,
          priceOfADay,
          other,
        }
      ],*/
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
