import React from "react";

import {
  Container,
  FormControl,
  Input,
  Stack,
  Button,
  VStack,
  Center,
  Heading,
} from "@chakra-ui/react";

export const BookingCreatePage = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl">Booking Form</Heading>
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
                  <FormControl id="bookingDateStart">
                    <Input
                      placeholder="Select Start Date"
                      size="md"
                      type="datetime-local"
                    />
                  </FormControl>
                  <FormControl id="bookingFinish">
                    <Input
                      placeholder="Select Finish Date"
                      size="md"
                      type="datetime-local"
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
                    Post Booking
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
