import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';

interface GarmentWidget {
  id: number;
  title: string;
  description: string;
  path: string; // route to navigate for details
}

const garmentWidgets: GarmentWidget[] = [
  {
    id: 1,
    title: 'Necklines',
    description: 'Explore different types of necklines with illustrations.',
    path: '/styles/necklines',
  },
  {
    id: 2,
    title: 'Sleeves',
    description: 'Various sleeve styles and sewing techniques.',
    path: '/styles/sleeves',
  },
  {
    id: 3,
    title: 'Pants',
    description: 'Different pants styles and tips for sewing them.',
    path: '/styles/pants',
  },
  {
    id: 4,
    title: 'Skirts',
    description: 'Various skirt styles, pleats, and sewing methods.',
    path: '/styles/skirts',
  },
  {
    id: 5,
    title: 'Tops & Blouses',
    description: 'Common top styles including blouses and shirts.',
    path: '/styles/tops-blouses',
  },
  {
    id: 6,
    title: 'Dresses',
    description: 'Dress styles, including A-line, wrap, and sheath dresses.',
    path: '/styles/dresses',
  },
];

export default function GarmentStyles() {
  const navigate = useNavigate();

  return (
    <PageWrapper title="Garment Styles" showBackButton>
      <Text mb={4}>
        This page explores various garment styles, including dresses, tops, pants, and more. Click on each style to see detailed information, sewing tips, and examples.
      </Text>

      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={{ base: 3, md: 4 }}>
        {garmentWidgets.map((widget) => (
          <Box
            key={widget.id}
            p={{ base: 3, md: 4 }}
            bg="brand.800"
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