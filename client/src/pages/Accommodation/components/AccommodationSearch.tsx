import { FC, useState } from "react";
import { Input, Stack, Center, Flex, Select, Text } from "@chakra-ui/react";
import { sortByOptions } from "../../../constants/sortBy";
import { accommodationTypeOptions } from "../../../constants/accommodationType";
import { serviceTypeOptions } from "../../../constants/serviceType";

export const AccommodationSearch: FC = () => {
  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("default");
  const [city, setCity] = useState("");
  const [accommodationType, setAccommodationType] = useState("szalloda");
  const [serviceType, setServiceType] = useState("teljes_panzio");

  const sortByChange = (e: any) => {
    setSortBy(e.target.value);
  };

  const accommodationTypeChange = (e: any) => {
    setAccommodationType(e.target.value);
  };

  const serviceTypeChange = (e: any) => {
    setServiceType(e.target.value);
  };

  const searchFunc = async (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Center>
      <Flex justify="space-between" direction="column">
        <Stack
          marginTop={{ base: "25px !important" }}
          spacing={{ base: 0, md: 4 }}
          direction={{ base: "column", md: "row" }}
          p={2}
          w={{ base: "auto", md: "7xl" }}
          overflow="hidden"
          pos="relative"
        >
          <Input
            placeholder="Search"
            variant="filled"
            focusBorderColor="pink.300"
            onChange={searchFunc}
          />
        </Stack>
        <Flex p={2} gap={3}>
          <Select
            id="sortBy"
            onChange={sortByChange}
            focusBorderColor="pink.300"
          >
            {sortByOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                selected={option.value === sortBy}
              >
                {option.text}
              </option>
            ))}
          </Select>
          {/* TODO: Make utils folder and make a file that collects all cities from accommodation data */}
          <Select placeholder="Select city" focusBorderColor="pink.300">
            <option value="option1">City 1</option>
            <option value="option3">City 2</option>
            <option value="option4">City 3</option>
          </Select>
          <Select
            id="accommodationType"
            onChange={accommodationTypeChange}
            focusBorderColor="pink.300"
          >
            {accommodationTypeOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                selected={option.value === accommodationType}
              >
                {option.text}
              </option>
            ))}
          </Select>
          <Select
            id="serviceType"
            onChange={serviceTypeChange}
            focusBorderColor="pink.300"
          >
            {serviceTypeOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                selected={option.value === serviceType}
              >
                {option.text}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
    </Center>
  );
};
