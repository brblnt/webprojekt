import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { Role } from "../types/enums/Role";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useEffect, useState } from "react";
import { ApplicationUser } from "../types/ApplicationUser";
import { getApplicationUserById } from "../services/apiRequests";
import axios from "axios";
import { url } from "inspector";

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useSelector((state: { auth: { user: any } }) => state.auth);
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant={"ghost"}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/">
                <Text
                  _hover={{
                    color: "pink.300",
                  }}
                  fontFamily={"heading"}
                  color={useColorModeValue("black", "white")}
                >
                  Cosa Nostra
                </Text>
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {user && user.authenticationData.role === Role.ADMIN && (
                <AdminNav />
              )}
              {user && user.authenticationData.role === Role.ACCOMMODATION && (
                <AccommodationNav />
              )}
              {user &&
                user.authenticationData.role === Role.APPLICATION_USER && (
                  <UserNav />
                )}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ColorModeSwitcher mr={5} />
            {user && <UserLoggedIn />}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {user && user.authenticationData.role === Role.ADMIN && (
                <AdminNav />
              )}
              {user && user.authenticationData.role === Role.ACCOMMODATION && (
                <AccommodationNav />
              )}
              {user &&
                user.authenticationData.role === Role.APPLICATION_USER && (
                  <UserNav />
                )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

const UserNav = () => {
  return (
    <Box>
      <Box pb={4} display={{ md: "none" }}>
        <Stack as={"nav"} spacing={4} mx={3}>
          <Flex direction={"column"}>
            <Link to={`/accommodation`}>
              <Text
                _hover={{
                  color: "pink.300",
                }}
                my={3}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.900", "gray.200")}
              >
                Discover Accommodation
              </Text>
            </Link>
          </Flex>
        </Stack>
      </Box>
      <Link to={`/accommodation`}>
        <Text
          _hover={{
            color: "pink.300",
          }}
        >
          Discover Accommodation
        </Text>
      </Link>
    </Box>
  );
};

const AccommodationNav = () => {
  return (
    <Box>
      <Box pb={4} display={{ md: "none" }}>
        <Stack as={"nav"} spacing={4} mx={3}>
          <Flex direction={"column"}>
            <Link to={`/accommodation/post`}>
              <Text
                _hover={{
                  color: "pink.300",
                }}
                my={3}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.900", "gray.200")}
              >
                Post Accommodation
              </Text>
            </Link>
          </Flex>
        </Stack>
      </Box>
      <Link to={`/accommodation/post`}>
        <Text
          _hover={{
            color: "pink.300",
          }}
        >
          Post Accommodation
        </Text>
      </Link>
    </Box>
  );
};

const AdminNav = () => {
  return (
    <Box>
      <Box pb={4} display={{ md: "none" }}>
        <Stack as={"nav"} spacing={4} mx={3}>
          <Flex direction={"column"}>
            <Link to={`/accommodation`}>
              <Text
                _hover={{
                  color: "pink.300",
                }}
                my={3}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.900", "gray.200")}
              >
                Discover Accommodation
              </Text>
            </Link>
            <Link to={`/accommodation/post`}>
              <Text
                _hover={{
                  color: "pink.300",
                }}
                mb={3}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.900", "gray.200")}
              >
                Post Accommodation
              </Text>
            </Link>
            <Link to={`/dashboard`}>
              <Text
                _hover={{
                  color: "pink.300",
                }}
                mb={3}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.900", "gray.200")}
              >
                Dashboard
              </Text>
            </Link>
          </Flex>
        </Stack>
      </Box>
      <Flex display={{ base: "none", md: "flex" }}>
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
        <Link
          to={`/accommodation/post`}
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
          <Text
            _hover={{
              color: "pink.300",
            }}
          >
            Post Accommodation
          </Text>
        </Link>
        <Text>/</Text>
        <Link to={`/dashboard`} style={{ marginLeft: "1rem" }}>
          <Text
            _hover={{
              color: "pink.300",
            }}
          >
            Dashboard
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

const UserLoggedIn = () => {
  const { user } = useSelector(
    (state: { auth: { user: ApplicationUser } }) => state.auth
  );




  const token = user.authenticationData.token;

  const [userP, setUser] = useState<ApplicationUser | null>(null);

  useEffect(() => {
    const loadUser = async (userId: any) => {
      const users = await getApplicationUserById(userId, token);
      setUser(users);
    };
    loadUser(user.id);
  }, [user.id, token]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout() as any);
    navigate("/login");
  };

  return (
    <Menu>
      <MenuButton>
        <Avatar
          src={`http://localhost:3010/hotel-booking/images/${userP?.authenticationData.imgPath && userP?.authenticationData.imgPath[0]}`}
        ></Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem as="a" href={`/profile/${user.authenticationData.userName}`}>
          Profile
        </MenuItem>
        <MenuItem
          as="a"
          href={`/profile/${user.authenticationData.userName}/settings`}
        >
          Settings
        </MenuItem>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
