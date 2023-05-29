import { FC, useState, useEffect } from "react";
import { Input, Stack, Center, Flex, Select } from "@chakra-ui/react";
import { sortByOptions } from "../../../constants/sortBy";
import { accommodationTypeOptions } from "../../../constants/accommodationType";
import { serviceTypeOptions } from "../../../constants/serviceType";
import { AccommodationList } from "./AccommodationList";
import { SearchQuery } from "../../../types/SearchQuery";
import { AccommodationType } from "../../../types/enums/AccommodationType";
import { ServiceType } from "../../../types/enums/ServiceType";
import { getAllAccommodations } from "../../../services/apiRequests";
import { Accommodation } from "../../../types/Accommodation";

export const SearchForm: FC = () => {
  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("default");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [accommodationType, setAccommodationType] = useState<AccommodationType | undefined>();
  const [serviceType, setServiceType] = useState<ServiceType | undefined>();

  const [accommodation, setAccommodation] = useState<Accommodation[] | null>(
    null
  );

  useEffect(() => {
    const loadAccommodation = async () => {
      const accommodation = await getAllAccommodations();
      setAccommodation(accommodation);
    };
    loadAccommodation();
  }, []);

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

  const countries = accommodation
    ? Array.from(
        new Set(accommodation.map((item: any) => item.address.country))
      )
    : [];

  const cities = Array.from(
    new Set(
      accommodation
        ?.filter((item: any) => item.address.country === country)
        .map((item: any) => item.address.city.cityName)
    )
  );

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
              value={sortBy}
            >
              {sortByOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </Select>
            <Select
              placeholder="Country"
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
              placeholder="City"
              id="city"
              onChange={cityChange}
              value={city}
              focusBorderColor="pink.300"
            >
              {country &&
                cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
            </Select>
            <Select
              id="accommodationType"
              onChange={accommodationTypeChange}
              focusBorderColor="pink.300"
              value={accommodationType}
              placeholder={`Accommodation Type`}
            >
              {accommodationTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </Select>

            <Select
              id="serviceType"
              onChange={serviceTypeChange}
              focusBorderColor="pink.300"
              value={serviceType}
              placeholder={`Service Type`}
            >
              {serviceTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
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
