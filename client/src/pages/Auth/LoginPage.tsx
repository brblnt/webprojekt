import React, { useCallback, useEffect } from 'react';
import {
  Container,
  Heading,
  Stack,
  Center,
} from '@chakra-ui/react';
import { LoginForm } from '../../components/auth/login/LoginForm';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess && user) {
      navigate('/');
    }

  }, [user, isError, isSuccess, message, navigate, dispatch])

  type UserData = {
    email: string;
    password: string;
  };

  const submitLogin = useCallback((userData: UserData) => {
    dispatch(login(userData) as any);
  }, [dispatch]);
  

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl">Sign in to your account</Heading>
          </Stack>
          <section>
            <LoginForm onSubmit={submitLogin} formData={{
              userName: '',
              password: ''
            }} />
          </section>
        </Stack>
      </Center>
    </Container>
  );
};
