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
import { BiLockAlt } from 'react-icons/bi';

export const RegisterPage = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl">Create you account</Heading>
          </Stack>
          <VStack as="form" spacing={8} w={{ base: 'sm', sm: 'lg' }} p={{ base: 5, sm: 6 }}>
            <VStack spacing={0} w="100%">
            <FormControl id="firstname">
                <Input
                  type="firstname"
                  placeholder="First Name"
                  rounded="md"
                  borderBottomLeftRadius="0"
                  borderBottomRightRadius="0"
                />
              </FormControl>
              <FormControl id="lastname">
                <Input
                  type="lastname"
                  placeholder="Last Name"
                  rounded="md"
                  borderBottomLeftRadius="0"
                  borderBottomRightRadius="0"
                />
              </FormControl>
              <FormControl id="email">
                <Input
                  type="email"
                  placeholder="Email Address"
                  rounded="md"
                  borderBottomLeftRadius="0"
                  borderBottomRightRadius="0"
                />
              </FormControl>
              <FormControl id="password" position="relative" bottom="1px">
                <Input
                  type="password"
                  placeholder="Password"
                  rounded="md"
                  borderTopLeftRadius="0"
                  borderTopRightRadius="0"
                />
              </FormControl>
            </VStack>
            <VStack w="100%">
            <Stack direction="row" justify="space-between" w="100%">
                <Link href='/login' fontSize={{ base: 'md', sm: 'md' }} >Already have an account?</Link>
              </Stack>
              <Button
                bg="pink.400"
                color="white"
                _hover={{
                  bg: 'pink.300'
                }}
                rounded="md"
                w="100%"
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
