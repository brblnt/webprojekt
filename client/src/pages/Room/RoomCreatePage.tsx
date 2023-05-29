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
} from "@chakra-ui/react";

export const RoomCreatePage = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl">Room Post Form</Heading>
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
                  <FormControl id="roomNum" marginBottom={3}>
                    <Center>
                      <Text>Number of Rooms</Text>
                    </Center>
                    <NumberInput defaultValue={1} min={1}>
                      <NumberInputField />
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
                    <NumberInput defaultValue={0} min={0}>
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
                    <NumberInput defaultValue={0} min={0}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                  <Center marginTop={3}>
                    <Stack spacing={5} direction="row" my={3}>
                      <Checkbox colorScheme="pink">Has Own Kitchen</Checkbox>
                      <Checkbox colorScheme="pink">Has Own Bathroom</Checkbox>
                    </Stack>
                  </Center>
                  <FormControl id="priceOfDay" marginBottom={3}>
                    <Center>
                      <Text>Price Of Day</Text>
                    </Center>
                    <NumberInput defaultValue={0} min={0} marginBottom={3}>
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
                      placeholder="Other Information"
                      value={``}
                      rounded="md"
                      name="roomOther"
                    />
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
                    Post Room
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