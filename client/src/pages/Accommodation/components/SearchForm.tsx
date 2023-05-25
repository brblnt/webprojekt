import { FC, useState } from "react";
import { Input, Stack, Center, Flex, Select } from "@chakra-ui/react";
import { sortByOptions } from "../../../constants/sortBy";
import { accommodationTypeOptions } from "../../../constants/accommodationType";
import { serviceTypeOptions } from "../../../constants/serviceType";
import { accommodationList } from "../../../data/dummyData";
import { AccommodationList } from "./AccommodationList";
import { SearchQuery } from "../../../types/SearchQuery";
import { AccommodationType } from "../../../types/enums/AccommodationType";
import { ServiceType } from "../../../types/enums/ServiceType";

export const SearchForm: FC = () => {
  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("default");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [accommodationType, setAccommodationType] = useState(AccommodationType.SZALLODA);
  const [serviceType, setServiceType] = useState(ServiceType.TELJES_PANZIO);

  const query: SearchQuery = {
    search,
    sortBy,
    country,
    city,
    accommodationType,
    serviceType,
  };

  const sortByChange = (e: any) => {
    setSortBy(e.target.value);
  };

  const accommodationTypeChange = (e: any) => {
    setAccommodationType(e.target.value);
  };

  const serviceTypeChange = (e: any) => {
    setServiceType(e.target.value);
  };

  const countryChange = async (e: any) => {
    setCountry(e.target.value);
    setCity("");
  };

  const cityChange = async (e: any) => {
    setCity(e.target.value);
  };

  const searchFunc = async (e: any) => {
    setSearch(e.target.value);
  };

  const countries = accommodationList.map((item) => item.address.country);
  const cities = accommodationList
    .filter((item) => item.address.country === country)
    .map((item) => item.address.city.cityName);

  return (
    <div>
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
            <Select
              placeholder="Select country"
              id="country"
              onChange={countryChange}
              focusBorderColor="pink.300"
            >
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </Select>
            <Select
              placeholder="Select city"
              id="city"
              onChange={cityChange}
              value={city} // Use the city state as the value prop
              focusBorderColor="pink.300"
            >
              {country && cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
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
      <AccommodationList query={query} />
    </div>
  );
};
