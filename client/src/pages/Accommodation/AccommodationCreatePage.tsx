import React from "react";

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
} from "@chakra-ui/react";
import { everyCountry } from "../../constants/everyCountry";
import { accommodationTypeOptions } from "../../constants/accommodationType";

export const AccommodationCreatePage = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl">Accommodation Post Form</Heading>
          </Stack>
          <Container maxW="7xl" p={{ base: 5, md: 10 }}>
            <Stack spacing={4}>
              <VStack
                as="form"
                spacing={8}
                w={{ base: "sm", sm: "lg" }}
                p={{ base: 5, sm: 6 }}
              >
                <VStack spacing={0} w="100%">
                  <FormControl id="accommodationName">
                    <Input
                      type="text"
                      placeholder="Accommodation Name"
                      value={``}
                      rounded="md"
                      borderBottomLeftRadius="0"
                      borderBottomRightRadius="0"
                      name="accommodationName"
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
                      value={``}
                      rounded="none"
                      name="accommodationEmail"
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
                      value={``}
                      rounded="md"
                      borderTopLeftRadius="0"
                      borderTopRightRadius="0"
                      name="accommodationPhone"
                    />
                  </FormControl>
                </VStack>

                <VStack spacing={0} w="100%">
                  <FormControl id="accommodationCountry">
                    <Select
                      placeholder="Select country"
                      id="city"
                      value={``}
                      focusBorderColor="pink.300"
                      rounded="md"
                      borderBottomLeftRadius="0"
                      borderBottomRightRadius="0"
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
                      value={``}
                      rounded="none"
                      name="accommodationPostalCode"
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
                      value={``}
                      rounded="none"
                      name="accommodationCity"
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
                      value={``}
                      rounded="none"
                      name="accommodationAddress"
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
                      value={``}
                      rounded="md"
                      borderTopLeftRadius="0"
                      borderTopRightRadius="0"
                      name="accommodationOther"
                    />
                  </FormControl>
                </VStack>
                <VStack spacing={0} w="100%">
                  <FormControl id="accommodationCountry">
                    <Select
                      placeholder="Select Accommodation Type"
                      id="city"
                      value={``}
                      focusBorderColor="pink.300"
                      rounded="md"
                      borderBottomLeftRadius="0"
                      borderBottomRightRadius="0"
                    >
                      {accommodationTypeOptions.map((type, index) => (
                        <option key={index} value={type.value}>
                          {type.text}
                        </option>
                      ))}
                    </Select>
                    <Center marginTop={3}>
                      <Stack spacing={5} direction="row">
                        <Checkbox colorScheme="pink">Teljes Panzió</Checkbox>
                        <Checkbox colorScheme="pink">Fél Panzió</Checkbox>
                        <Checkbox colorScheme="pink">Nincs Ellátás</Checkbox>
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
