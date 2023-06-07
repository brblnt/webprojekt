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
  useColorModeValue,
} from "@chakra-ui/react";
import { everyCountry } from "../../constants/everyCountry";
import { accommodationTypeOptions } from "../../constants/accommodationType";
import { serviceTypeOptions } from "../../constants/serviceType";
import { create } from "../../features/accommodation/accommodationSlice";
import {  useDispatch, useSelector } from "react-redux";

export const AccommodationCreatePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => {
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
    addressDetail: "",
    imagePath: "",
    description: "",
    accommodationType: "",
    serviceType: [],
    rooms: [],
  });

  const {
    accommodationName,
    emailAddress,
    phoneNumber,
    country,
    postalCode,
    cityName,
    addressName,
    addressDetail,
    imagePath,
    description,
    accommodationType,
    serviceType,
    rooms,
  } = formData;

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

  const onSubmit = (e: any) => {
    e.preventDefault();
    const accommodationData = {
      id: "",
      authenticationData: {
        id: user.authenticationData.id,
        token: user.authenticationData.token
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
        addressDetail,
      },
      emailAddress,
      imagePath,
      description,
      phoneNumber,
      accommodationType,
      serviceTypes: [serviceType],
      rooms
    };
    dispatch(create(accommodationData) as any);
  };

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack
          spacing={4}
          bg={useColorModeValue("gray.200", "gray.900")}
          boxShadow="dark-lg"
          color={useColorModeValue("black", "white")}
          p={2}
          rounded="md"
          overflow="hidden"
          pos="relative"
          mt={3}
        >
          <Stack align="center" textAlign={"center"}>
            <Heading fontSize="3xl" mt={3}>
              {user && user.authenticationData.userName
                ? "Accommodation creation for " +
                  user.authenticationData.userName
                : ""}{" "}
            </Heading>
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
                      focusBorderColor="pink.300"
                      placeholder="Accommodation Name"
                      value={accommodationName}
                      rounded="md"
                      borderBottomLeftRadius="0"
                      borderBottomRightRadius="0"
                      name="accommodationName"
                      onChange={onChange}
                      w={{ base: "250px", md: "464px" }}
                    />
                    <Input
                      type="text"
                      focusBorderColor="pink.300"
                      placeholder="Description"
                      value={description}
                      rounded="none"
                      name="description"
                      onChange={onChange}
                      w={{ base: "250px", md: "464px" }}
                    />
                  </FormControl>
                  <FormControl
                    id="accommodationEmail"
                    position="relative"
                    bottom="1px"
                  >
                    <Input
                      type="text"
                      focusBorderColor="pink.300"
                      placeholder="Email"
                      value={emailAddress}
                      rounded="none"
                      name="emailAddress"
                      onChange={onChange}
                      w={{ base: "250px", md: "464px" }}
                    />
                  </FormControl>
                  <FormControl
                    id="accommodationPhone"
                    position="relative"
                    bottom="1px"
                  >
                    <Input
                      type="text"
                      focusBorderColor="pink.300"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      rounded="md"
                      borderTopLeftRadius="0"
                      borderTopRightRadius="0"
                      name="phoneNumber"
                      onChange={onChange}
                      w={{ base: "250px", md: "464px" }}
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
                      w={{ base: "250px", md: "464px" }}
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
                      focusBorderColor="pink.300"
                      value={postalCode}
                      rounded="none"
                      name="postalCode"
                      onChange={onChange}
                      w={{ base: "250px", md: "464px" }}
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
                      focusBorderColor="pink.300"
                      value={cityName}
                      rounded="none"
                      name="cityName"
                      onChange={onChange}
                      w={{ base: "250px", md: "464px" }}
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
                      focusBorderColor="pink.300"
                      value={addressName}
                      rounded="none"
                      name="addressName"
                      onChange={onChange}
                      w={{ base: "250px", md: "464px" }}
                    />
                  </FormControl>
                  <FormControl
                    id="accommodationOther"
                    position="relative"
                    bottom="1px"
                  >
                    <Input
                      type="text"
                      placeholder="Address Detail"
                      focusBorderColor="pink.300"
                      value={addressDetail}
                      rounded="md"
                      borderTopLeftRadius="0"
                      borderTopRightRadius="0"
                      name="addressDetail"
                      onChange={onChange}
                      w={{ base: "250px", md: "464px" }}
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
                      w={{ base: "250px", md: "464px" }}
                    >
                      {accommodationTypeOptions.map((type, index) => (
                        <option key={index} value={type.value}>
                          {type.text}
                        </option>
                      ))}
                    </Select>
                    <Select
                      placeholder="Select Service Type"
                      id="city"
                      value={serviceType}
                      focusBorderColor="pink.300"
                      rounded="md"
                      borderTopLeftRadius="0"
                      borderTopRightRadius="0"
                      name="serviceType"
                      onChange={onChange}
                      w={{ base: "250px", md: "464px" }}
                    >
                      {serviceTypeOptions.map((type, index) => (
                        <option key={index} value={type.value}>
                          {type.text}
                        </option>
                      ))}
                    </Select>
                    <Button
                      mt={5}
                      bg="pink.400"
                      color="white"
                      _hover={{
                        bg: "pink.300",
                      }}
                      rounded="md"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        onSubmit(e);
                      }}
                      w={{ base: "250px", md: "464px" }}
                    >
                      Post Accommodation
                    </Button>
                  </FormControl>
                </VStack>
              </VStack>
            </Stack>
          </Container>
        </Stack>
      </Center>
    </Container>
  );
};
