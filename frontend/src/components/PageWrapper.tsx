import { ReactNode } from 'react';
import { Box, Heading, Flex, Spacer } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import AppButton from './Button';

interface PageWrapperProps {
  title?: string;
  children: ReactNode;
  showHeaderButtons?: boolean;
}

export default function PageWrapper({
  title,
  children,
  showHeaderButtons = true,
}: PageWrapperProps) {
  const navigate = useNavigate();

  const headerHeight = showHeaderButtons ? 6 : 20;

  return (
    <Box w="100%" minH="100vh">
      {/* Sticky Header */}
      <Flex
        as="header"
        position="sticky"
        top={0}
        zIndex={1000}
        bg="brand.500"
        color="white"
        direction="column"
        boxShadow="md"
        align="center"
        justify="center"
        p={4}
      >
        <Heading size={{ base: 'md', md: 'lg' }}>Sewing Buddy</Heading>
      </Flex>

      {showHeaderButtons && (
        <Flex
          as="header"
          position="sticky"
          top={14}
          bg="transparent"
          justify="space-between"
          p={3}
        >
          <AppButton
            colorScheme="brand"
            variantType="secondary"
            onClick={() => navigate(-1)}
          >
            &larr; Back
          </AppButton>
          <AppButton variantType="secondary" onClick={() => navigate('/')}>
            Home
          </AppButton>
        </Flex>
      )}

      {/* Scrollable Content */}
      <Box pt={`${headerHeight}px`} px={{ base: 4, md: 6 }} pb={6}>
        {title && (
          <Heading mb={4} textAlign="center">
            {title}
          </Heading>
        )}{' '}
        {children}
      </Box>
    </Box>
  );
}
