import { ReactNode } from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface PageWrapperProps {
  title: string;
  children: ReactNode;
  showBackButton?: boolean; // optional, default true
}

export default function PageWrapper({
  title,
  children,
  showBackButton = true,
}: PageWrapperProps) {
  const navigate = useNavigate();

  return (
    <Box p={{ base: 4, md: 6 }} w="100%">
      {showBackButton && (
        <Button mb={4} colorScheme="brand" onClick={() => navigate(-1)}>
          &larr; Back
        </Button>
      )}

      <Heading mb={4}>{title}</Heading>

      <Box>{children}</Box>
    </Box>
  );
}