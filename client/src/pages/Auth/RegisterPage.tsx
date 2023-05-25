import {
  Container,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Center,
  Checkbox,
  Link
} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../../features/auth/authSlice';

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    role: ''
  });

  const { userName, password, role } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate('/');
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const userData = {
      userName,
      password,
      role,
    };
    dispatch(register(userData) as any);
  };

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl">Create your account</Heading>
          </Stack>
          <VStack
            as="form"
            spacing={8}
            w={{ base: 'sm', sm: 'lg' }}
            p={{ base: 5, sm: 6 }}
            onSubmit={onSubmit}
          >
            <VStack spacing={0} w="100%">
              <FormControl id="userName">
                <Input
                  type="text"
                  placeholder="User Name"
                  rounded="md"
                  borderBottomLeftRadius="0"
                  borderBottomRightRadius="0"
                  name="userName"
                  value={userName}
                  onChange={onChange}
                />
              </FormControl>
              <FormControl id="password" position="relative">
                <Input
                  type="password"
                  placeholder="Password"
                  rounded="md"
                  borderTopLeftRadius="0"
                  borderTopRightRadius="0"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </FormControl>
              <FormControl id="roles" position="relative">
                <Select
                  placeholder="Select an account type"
                  name="role"
                  value={role}
                  onChange={onChange}
                >
                  <option value="APPLICATION_USER">Application User</option>
                  <option value="ACCOMMODATION">Accommodation</option>
                </Select>
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%">
                <Link href="/login" fontSize={{ base: 'md', sm: 'md' }}>
                  Already have an account?
                </Link>
              </Stack>
              <Button
                bg="pink.400"
                color="white"
                _hover={{
                  bg: 'pink.300',
                }}
                rounded="md"
                w="100%"
                type="submit"
              >
                Sign up
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};
