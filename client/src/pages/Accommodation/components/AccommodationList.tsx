import { FC, useState, useEffect } from "react";
import { Container, VStack } from "@chakra-ui/react";
import { SearchQuery } from "../../../types/SearchQuery";
import { AccommodationItem } from "./AccommodationItem";
import { getAllAccommodations } from "../../../services/apiRequests";
import { Accommodation } from "../../../types/Accommodation";

export interface AccommodationItemProps {
  query: SearchQuery;
}

export const AccommodationList: FC<AccommodationItemProps> = ({ query }) => {

  const [accommodation, setAccommodation] = useState<Accommodation[] | null>(
    null
  );
  

  // TODO: SEARCH!!!
  useEffect(() => {
    const loadAccommodation = async () => {
      const accommodation = await getAllAccommodations();
      if (query.sortBy === "default") {
        setAccommodation(accommodation);
      } else if (query.sortBy === "cheapest") {
        const sortedAccommodation = [...accommodation].sort((a, b) => {
          const averagePriceA =
            a.rooms.reduce((sum, room) => sum + room.priceOfADay, 0) /
            a.rooms.length;
          const averagePriceB =
            b.rooms.reduce((sum, room) => sum + room.priceOfADay, 0) /
            b.rooms.length;
  
          return averagePriceA - averagePriceB;
        });
  
        setAccommodation(sortedAccommodation);
      }
      else if (query.sortBy === "expensive") {
        const sortedAccommodation = [...accommodation].sort((a, b) => {
          const averagePriceA =
            a.rooms.reduce((sum, room) => sum + room.priceOfADay, 0) /
            a.rooms.length;
          const averagePriceB =
            b.rooms.reduce((sum, room) => sum + room.priceOfADay, 0) /
            b.rooms.length;
  
          return averagePriceB - averagePriceA;
        });
  
        setAccommodation(sortedAccommodation);

      }
    };
    loadAccommodation();
  }, [query.sortBy]);

  const filteredAccommodations = accommodation?.filter((accommodation) => {
    if (query.country && accommodation.address.country !== query.country) {
      return false;
    }

    if (query.city && accommodation.address.city.cityName !== query.city) {
      return false;
    }

    if (
      query.accommodationType &&
      accommodation.accommodationType !== query.accommodationType
    ) {
      return false;
    }

    // if (query.serviceType && accommodation.serviceTypes !== query.serviceType) {
    //   return false;
    // }

    return true;
  });

  return (
    <div>
      {filteredAccommodations?.map((accommodation) => {
        return (
          <Container
            key={accommodation.id}
            maxW="7xl"
            p={{ base: 5, md: 12 }}
            margin="0 auto"
          >
            <VStack spacing={4}>
              <AccommodationItem accommodation={accommodation} />
            </VStack>
          </Container>
        );
      })}
    </div>
  );
};