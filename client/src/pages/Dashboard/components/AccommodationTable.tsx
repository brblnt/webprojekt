import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
  Text,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { getAllAccommodations } from "../../../services/apiRequests";
import { Accommodation } from "../../../types/Accommodation";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { AccommodationEditForm } from "./AccommodationEditForm";

export const AccommodationTableRow = ({
  accommodation,
}: {
  accommodation: Accommodation;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = () => {
    onOpen();
  };

  return (
    <>
      <Tr>
        <Td>{accommodation.id}</Td>
        <Td>{accommodation.accommodationName}</Td>
        <Td>{accommodation.emailAddress}</Td>
        <Td>{accommodation.phoneNumber}</Td>
        <Td>{accommodation.accommodationType}</Td>
        <Td>{accommodation.serviceTypes}</Td>
        <Td>{accommodation.address.addressId}</Td>
        <Td>{accommodation.address.country}</Td>
        <Td>{accommodation.address.city.postalCode}</Td>
        <Td>{accommodation.address.city.cityName}</Td>
        <Td>{accommodation.address.addressName}</Td>
        <Td>
          <Button colorScheme={"red"}>
            <DeleteIcon />
          </Button>
        </Td>
        <Td>
          <Button onClick={handleEdit}>
            <EditIcon />
          </Button>
        </Td>
      </Tr>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Accommodation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AccommodationEditForm accommodation={accommodation} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="pink" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Update Data</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const AccommodationTable = () => {
  const [accommodations, setAccommodations] = useState<Accommodation[] | null>(
    null
  );

  useEffect(() => {
    const loadAccommodation = async () => {
      const accommodations = await getAllAccommodations();
      setAccommodations(accommodations);
    };
    loadAccommodation();
  }, []);

  return (
    <Box>
      <Center>
        <Text>Accommodation Table</Text>
      </Center>
      <TableContainer
        maxWidth={"1800px"}
        maxHeight={"320px"}
        overflowY={"auto"}
        overflowX={"auto"}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Email Address</Th>
              <Th>Phone Number</Th>
              <Th>Accommodation Type</Th>
              <Th>Service Type</Th>
              <Th>Address Id</Th>
              <Th>Country</Th>
              <Th>Postal Code</Th>
              <Th>City</Th>
              <Th>Address Name</Th>
              <Th>DELETE</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {accommodations?.map((accommodation) => {
              return (
                <AccommodationTableRow
                  key={accommodation.id}
                  accommodation={accommodation}
                />
              );
            })}
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Email Address</Th>
              <Th>Phone Number</Th>
              <Th>Accommodation Type</Th>
              <Th>Service Type</Th>
              <Th>Address Id</Th>
              <Th>Country</Th>
              <Th>Postal Code</Th>
              <Th>City</Th>
              <Th>Address Name</Th>
              <Th>DELETE</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
