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
import { getAllApplicationUsers } from "../../../services/apiRequests";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ApplicationUser } from "../../../types/ApplicationUser";
import { UserEditForm } from "./UserEditForm";
import { useDispatch } from "react-redux";
import { remove, update } from "../../../features/user/userSlice";

const UserTableRow = ({
  user,
  onDelete,
  onUpdate,
}: {
  user: ApplicationUser;
  onDelete: () => void;
  onUpdate: (updatedUser: ApplicationUser) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = () => {
    onOpen();
  };

  const formatBooleanValue = (value: boolean) => {
    return value ? "True" : "False";
  };

  const dispatch = useDispatch();

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const userId = user.id.toString();
    await dispatch(remove(userId) as any);
    onDelete();
  };

  return (
    <>
      <Tr>
        <Td>{user.id}</Td>
        <Td>{user.authenticationData.userName}</Td>
        <Td>{user.authenticationData.role}</Td>
        <Td>{user.authenticationData.registrationDate}</Td>
        <Td>{user.firstName}</Td>
        <Td>{user.lastName}</Td>
        <Td>{user.emailAddress}</Td>
        <Td>{user.phoneNumber}</Td>
        <Td>{formatBooleanValue(user.authenticationData.accountNonExpired)}</Td>
        <Td>{formatBooleanValue(user.authenticationData.accountNonLocked)}</Td>
        <Td>
          {formatBooleanValue(
            user.authenticationData.accountCredentialsNonExpired
          )}
        </Td>
        <Td>{formatBooleanValue(user.authenticationData.accountEnabled)}</Td>

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
            <UserEditForm user={user} onUpdate={onUpdate} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const UserTable = () => {
  const [users, setUsers] = useState<ApplicationUser[] | null>(null);
  const dispatch = useDispatch();

  const loadUsers = async () => {
    const users = await getAllApplicationUsers();
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
        <Text>User Table</Text>
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
              <Th>Username</Th>
              <Th>Role</Th>
              <Th>Registration Date</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email Address</Th>
              <Th>Phone Number</Th>
              <Th>Non Expired</Th>
              <Th>Non Locked</Th>
              <Th>Credentials Non Expired</Th>
              <Th>Enabled</Th>
              <Th>DELETE</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Thead>

          <Tbody>
            {users?.map((user) => (
              <UserTableRow
                key={user.id}
                user={user}
                onDelete={() => loadUsers()}
                onUpdate={handleUpdate}
              />
            ))}
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>Id</Th>
              <Th>Username</Th>
              <Th>Role</Th>
              <Th>Registration Date</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email Address</Th>
              <Th>Phone Number</Th>
              <Th>Non Expired</Th>
              <Th>Non Locked</Th>
              <Th>Credentials Non Expired</Th>
              <Th>Enabled</Th>
              <Th>DELETE</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
