import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
import { AuthenticationData } from "../types/AuthenticationData";
import { Role } from "../types/enums/Role";
function NavBar() {
  const { user } = useSelector((state: { auth: { user: AuthenticationData } }) => state.auth);
  
  return (
    <Box>
      <Flex
        bg={"gray.800"}
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.900"}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text fontFamily={"heading"} color={"white"}>
            <Link to="/">
              <Text
                _hover={{
                  color: "pink.300",
                }}
              >
                Cosa Nostra
              </Text>
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            {user && user.role === Role.ADMIN && <AdminNav />}
            {user && user.role === Role.ACCOMMODATION && <AccommodationNav />}
            {user && user.role === Role.APPLICATION_USER && <UserNav />}
          </Flex>
        </Flex>
        {user && <UserLoggedIn />}
      </Flex>
    </Box>
  );
}

const UserNav = () => {
  return (
    <Link to={`/accommodation`}>
      <Text
        _hover={{
          color: "pink.300",
        }}
      >
        Discover Accommodation
      </Text>
    </Link>
  );
};

const AccommodationNav = () => {
  return (
    <Link to={`/accommodation/post`}>
      <Text
        _hover={{
          color: "pink.300",
        }}
      >
        Post Accommodation
      </Text>
    </Link>
  );
};

const AdminNav = () => {
  return (
    <Flex>
      <Link to={`/accommodation`} style={{ marginRight: "1rem" }}>
        <Text
          _hover={{
            color: "pink.300",
          }}
        >
          Discover Accommodation
        </Text>
      </Link>
      <Text>/</Text>
      <Link to={`/accommodation/post`} style={{ marginLeft: "1rem" }}>
        <Text
          _hover={{
            color: "pink.300",
          }}
        >
          Post Accommodation
        </Text>
      </Link>
    </Flex>
  );
};

const UserLoggedIn = () => {
  const { user } = useSelector((state: { auth: { user: AuthenticationData } }) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout() as any);
    navigate("/login");
  };
  return (
    <Menu colorScheme="pink">
      <MenuButton>
        <Avatar></Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem as='a' href={`/profile/${user.userName}`}>
          Profile
        </MenuItem>
        <MenuItem as='a' href={`/profile/${user.userName}/settings`}>
          Settings
        </MenuItem>
        <MenuItem onClick={onLogout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavBar;
