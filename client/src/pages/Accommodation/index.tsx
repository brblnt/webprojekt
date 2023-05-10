import { Container, VStack } from "@chakra-ui/react";
import { accommodationList } from "../../data/dummyData";
import { AccommodationItem } from "./components/AccommodationItem";

export const AccommodationPage = () => {
  return (
    <div>
      {accommodationList.map((accommodation) => {
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
