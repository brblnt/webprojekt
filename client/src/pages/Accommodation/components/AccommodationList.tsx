import { FC } from "react";
import { Container, VStack } from "@chakra-ui/react";
import { accommodationList } from "../../../data/dummyData";
import { SearchQuery } from "../../../types/SearchQuery";
import { AccommodationItem } from "./AccommodationItem";

export interface AccommodationItemProps {
  query: SearchQuery;
}

export const AccommodationList: FC<AccommodationItemProps> = ({ query }) => {
  const filteredAccommodations = accommodationList.filter((accommodation) => {
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
    
    if (
      query.serviceType &&
      accommodation.serviceTypes !== query.serviceType
    ) {
      return false;
    }
    

    return true;
  });
  return (
    <div>
      {filteredAccommodations.map((accommodation) => {
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
