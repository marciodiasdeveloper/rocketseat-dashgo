import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password:string;
}

export default function SignIn() {
  const { register, handleSubmit, formState, errors } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (data, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            type="email" 
            name="email" 
            label="E-mail" 
            error={errors.email}
            ref={register({ required: 'E-mail obrigatório' })} 
          />
          <Input 
            type="password" 
            name="password" 
            label="Senha" 
            error={errors.password}
            ref={register({ required: 'Senha obrigatório' })} 
          />
        </Stack>       
        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
