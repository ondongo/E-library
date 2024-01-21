'use client';

import { useAuthContext } from '@/providers/AuthProvider';
import { Flex, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
function AuthGuard({
  children,
  whenSignedOut = '/signin',
}: {
  whenSignedOut?: string;
  children: React.ReactNode;
}) {
  const { user } = useAuthContext();
  if (user === undefined) {
    return null;
  }
  return (
    <div>
      {!user ? (
        <Flex
          direction={'column'}
          alignItems={'center'}
          gap={8}
          justifyContent={'center'}
          minHeight={'80vh'}
          textAlign={'center'}
          maxW={'60rem'}
          mx={'auto'}
          px={4}
        >
          <Text fontSize={['3xl', '6xl']} color={'brand.midgray'}>
            Vous devez vous connecter avant d&apos;accéder à cette page
          </Text>
          <Link
            href={whenSignedOut}
            px={6}
            py={3}
            rounded={'lg'}
            bg={'#000'}
            color={'white'}
            _hover={{
              opacity: '80%',
            }}
            fontSize={'lg'}
          >
            Se connecter
          </Link>
        </Flex>
      ) : (
        children
      )}
    </div>
  );
}

export default AuthGuard;
