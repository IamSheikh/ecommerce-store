import Page from '../layouts/page';
import {
  Box,
  Text,
  Flex,
  Link,
  Heading,
  Input,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateCurrentUser,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import useAuth from '../hooks/use-auth';

const Register = () => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (window !== null || window !== undefined) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'sign-in-button',
        {
          size: 'invisible',
          callback: (response) => {},
        },
        auth
      );
    }
  }, []);

  useEffect(() => {
    if (user) {
      router.replace('/');
    }
  }, [user, router]);

  const handleInputPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const inputs = [
    {
      type: 'tel',
      label: 'Phone Number',
      required: true,
      value: phoneNumber,
      onChange: handleInputPhoneNumber,
      placeholder: '000-000-000-000',
    },
  ];

  console.log(inputs[0]);

  const registerUser = (e) => {
    e.preventDefault();
    let appVerifier;
    if (window !== null || window !== undefined) {
      window.recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
      });
      appVerifier = window.recaptchaVerifier;
    }

    signInWithPhoneNumber(auth, `+92${phoneNumber}`, appVerifier)
      .then((confirmationResult) => {
        if (window !== undefined || window !== null) {
          let userInput = prompt('Verification Code', '');
          confirmationResult.confirm(userInput).then(async ({ user }) => {
            console.log({
              username: user.displayName,
              phoneNumber: user.phoneNumber,
            });
            router.push('/');
          });
        }
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Error; SMS not sent
        // ...
      });
  };

  return (
    <Page title='Register'>
      <Flex justifyContent='center' align='center' h='100vh' direction='column'>
        <Heading size='xl'>Login</Heading>

        <Flex
          as='form'
          justifyContent='center'
          alignItems='center'
          direction='column'
          mt={5}
          onSubmit={registerUser}
        >
          {inputs.map((input, i) => (
            <Box
              key={i}
              mb={2}
              textAlign='center'
              display='flex'
              flexDirection='column'
            >
              <FormLabel fontSize='xl' display='flex'>
                {input.label}
                {input.required ? (
                  <FormLabel color='red.500' fontSize='xl' ml={2}>
                    *
                  </FormLabel>
                ) : (
                  ''
                )}
              </FormLabel>
              <Flex alignItems='center'>
                <Input
                  placeholder={input.placeholder}
                  type={input.type}
                  required={input.required}
                  textAlign='center'
                  value={input.value}
                  onChange={input.onChange}
                />
              </Flex>
            </Box>
          ))}
          <div id='sign-in-button'></div>
          <Button type='submit'>Login</Button>
        </Flex>

        <Link>
          <NextLink href='/login'>Already have an account? Login</NextLink>
        </Link>
      </Flex>
    </Page>
  );
};

export default Register;
