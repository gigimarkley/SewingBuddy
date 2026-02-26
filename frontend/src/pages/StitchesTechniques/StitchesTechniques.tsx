import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';

interface StitchWidget {
  id: number;
  title: string;
  description: string;
  path: string;
}

const widgets: StitchWidget[] = [
  {
    id: 1,
    title: 'Hand Stitches',
    description: 'Running, backstitch, whipstitch, and more',
    path: '/stitches-techniques/hand-stitches',
  },
  {
    id: 2,
    title: 'Machine Stitches',
    description: 'Straight, zigzag, overlock, and decorative stitches',
    path: '/stitches-techniques/machine-stitches',
  },
];

export default function StitchesTechniques() {
  const navigate = useNavigate();

  return (
    <PageWrapper title="Stitches and Techniques" showBackButton>
      <Text mb={4}>
        This page explains different types of hand and machine stitches, their uses, and how to adjust stitch settings on your sewing machine.
      </Text>

      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={{ base: 3, md: 4 }}>
        {widgets.map((widget) => (
          <Box
            key={widget.id}
            p={{ base: 3, md: 4 }}
            bg="orange.500"
            color="white"
            borderRadius="md"
            boxShadow="sm"
            textAlign="center"
            _hover={{
              boxShadow: 'md',
              cursor: 'pointer',
              transform: 'scale(1.02)',
              transition: 'all 0.2s',
            }}
            onClick={() => navigate(widget.path)}
          >
            <Heading size="sm" mb={2}>
              {widget.title}
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{widget.description}</Text>
          </Box>
        ))}
      </Grid>
    </PageWrapper>
  );
}