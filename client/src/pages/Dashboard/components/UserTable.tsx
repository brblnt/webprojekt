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
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { getAllApplicationUsers, getAllAuthentications } from "../../../services/apiRequests";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ApplicationUser } from "../../../types/ApplicationUser";
import { UserEditForm } from "./UserEditForm";
import { useDispatch, useSelector } from "react-redux";
import { remove, update } from "../../../features/user/userSlice";
import { AuthenticationData } from "../../../types/AuthenticationData";

const UserTableRow = ({
  appUser,
  onDelete,
  onUpdate,
}: {
  appUser: ApplicationUser;
  onDelete: () => void;
  onUpdate: (updatedUser: ApplicationUser) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = () => {
    onOpen();
  };

  const dispatch = useDispatch();

  const { user } = useSelector(
    (state: { auth: { user: ApplicationUser } }) => state.auth
  );

  const token = user.authenticationData.token

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const userData = appUser;
    console.log(userData)
    await dispatch(remove({userData, token}) as any);
    onDelete();
  };

  return (
    <>
      <Tr>
        <Td>{appUser.id}</Td>
        <Td>{appUser.firstName}</Td>
        <Td>{appUser.lastName}</Td>
        <Td>{appUser.emailAddress}</Td>
        <Td>{appUser.phoneNumber}</Td>
        <Td>
          <Button colorScheme={"red"} onClick={handleDelete}>
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
          <ModalHeader>Update User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UserEditForm user={appUser} onUpdate={onUpdate} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const UserTable = () => {
  const [users, setUsers] = useState<ApplicationUser[] | null>(null);
  const dispatch = useDispatch();

  const { user } = useSelector(
    (state: { auth: { user: ApplicationUser } }) => state.auth
  );

  const token = user.authenticationData.token

  const loadUsers = async () => {
    const users = await getAllApplicationUsers(token);
    setUsers(users);
  };

  const handleUpdate = async (updatedUser: ApplicationUser) => {
    await dispatch(update(updatedUser) as any);
    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Box>
      <Center>
        <Text>Appliction User Table</Text>
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
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email Address</Th>
              <Th>Phone Number</Th>
              <Th>DELETE</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Thead>

          <Tbody>
            {users?.map((user) => (
              <UserTableRow
                key={user.id}
                appUser={user}
                onDelete={() => loadUsers()}
                onUpdate={handleUpdate}
              />
            ))}
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>Id</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email Address</Th>
              <Th>Phone Number</Th>
              <Th>DELETE</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
