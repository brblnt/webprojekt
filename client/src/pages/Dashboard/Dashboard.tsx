import React from "react";
import { Center, Flex } from "@chakra-ui/react";

import { AccommodationTable } from "./components/AccommodationTable";
import { UserTable } from "./components/UserTable";
import { BookingTable } from "./components/BookingTable";
import { RoomTable } from "./components/RoomTable";
export const Dashboard = () => {
  return (
    <Center mt={5}>
      <Flex direction={"column"}>
        <UserTable />
        <AccommodationTable />
        <RoomTable />
        <BookingTable />
      </Flex>
    </Center>
  );
};
