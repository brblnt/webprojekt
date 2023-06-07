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
import {
  getAllAuthentications,
} from "../../../services/apiRequests";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { remove, update } from "../../../features/auth/authSlice";
import { AuthenticationData } from "../../../types/AuthenticationData";
import { AuthEditForm } from "./AuthEditForm";
import { ApplicationUser } from "../../../types/ApplicationUser";

const AuthTableRow = ({
  auth,
  onDelete,
  onUpdate,
}: {
  auth: AuthenticationData;
  onDelete: () => void;
  onUpdate: (updatedAuth: AuthenticationData) => void;
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
    const authId = auth.id.toString();
    await dispatch(remove(authId) as any);
    onDelete();
  };

  return (
    <>
      <Tr>
        <Td>{auth.id}</Td>
        <Td>{auth.userName}</Td>
        <Td>{auth.role}</Td>
        <Td>{auth.registrationDate}</Td>
        <Td>{formatBooleanValue(auth.accountNonExpired)}</Td>
        <Td>{formatBooleanValue(auth.accountNonLocked)}</Td>
        <Td>{formatBooleanValue(auth.accountCredentialsNonExpired)}</Td>
        <Td>{formatBooleanValue(auth.accountEnabled)}</Td>
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
            <AuthEditForm auth={auth} onUpdate={onUpdate} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const AuthTable = () => {

  const { user } = useSelector(
    (state: { auth: { user: ApplicationUser } }) => state.auth
  );

  const [auths, setAuths] = useState<AuthenticationData[] | null>(null);
  const dispatch = useDispatch();

    const token = user.authenticationData.token

  const loadAuths = async () => {
    const auths = await getAllAuthentications(token);
    setAuths(auths);
  };

  const handleUpdate = async (updatedAuth: AuthenticationData) => {
    await dispatch(update(updatedAuth) as any);
    loadAuths();
  };

  useEffect(() => {
    loadAuths();
  }, []);

  return (
    <Box>
      <Center>
        <Text>Authentication Table</Text>
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
              <Th>Non Expired</Th>
              <Th>Non Locked</Th>
              <Th>Credentials Non Expired</Th>
              <Th>Enabled</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Thead>

          <Tbody>
            {auths?.map((auth) => (
              <AuthTableRow
                key={auth.id}
                auth={auth}
                onDelete={() => loadAuths()}
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
              <Th>Non Expired</Th>
              <Th>Non Locked</Th>
              <Th>Credentials Non Expired</Th>
              <Th>Enabled</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
