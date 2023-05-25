import {
    Container,
    FormControl,
    Input,
    Stack,
    Button,
    VStack,
    Checkbox,
    Link,
  } from '@chakra-ui/react';
  import { BiLockAlt } from 'react-icons/bi';
  import React, { useCallback, useState } from 'react';

  interface LoginFormProps {
    formData: {
      userName: string;
      password: string;
    };
    //onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (formData: any) => void;
  }  

  
  
  export const LoginForm = ({ onSubmit }: LoginFormProps) => {

    const [formData, setFormData] = useState({
      userName: '',
      password: '',
    })
  
    const submitHandler = useCallback((event: any) => {
      event.preventDefault();
      onSubmit(formData);
    }, [onSubmit, formData]);
  
    const onChange = useCallback((e: any) => {
      setFormData(
        (prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        })
      );
    }, []);
  
    return (
      <Container maxW="7xl" p={{ base: 5, md: 10 }}>
        <Stack spacing={4}>
          <VStack as="form" spacing={8} w={{ base: 'sm', sm: 'lg' }} p={{ base: 5, sm: 6 }}>
            <VStack spacing={0} w="100%">
              <FormControl id="userName">
              <Input
                type="text"
                placeholder="User Name"
                value={formData.userName}
                rounded="md"
                borderBottomLeftRadius="0"
                borderBottomRightRadius="0"
                onChange={onChange}
                name="userName"
                />
              </FormControl>
              <FormControl id="password" position="relative" bottom="1px">
                <Input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  rounded="md"
                  borderTopLeftRadius="0"
                  borderTopRightRadius="0"
                  onChange={onChange}
                  name="password"
                />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%">
                <Checkbox colorScheme="pink" size="md">
                  Remember me
                </Checkbox>
                <Link href="/register" fontSize={{ base: 'md', sm: 'md' }}>
                  Doesn't have an account yet?
                </Link>
              </Stack>
              <Button
                onClick={submitHandler}
                leftIcon={<BiLockAlt />}
                bg="pink.400"
                color="white"
                _hover={{
                  bg: 'pink.300',
                }}
                rounded="md"
                w="100%"
              >
                Sign in
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Container>
    );
  };
  