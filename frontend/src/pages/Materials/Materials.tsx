import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';

interface MaterialWidget {
  id: number;
  title: string;
  description: string;
  path: string;
}

const widgets: MaterialWidget[] = [
  {
    id: 1,
    title: 'Fabric Types',
    description: 'Cotton, silk, wool, and synthetics',
    path: '/materials/fabrics',
  },
  {
    id: 2,
    title: 'Fabric Behavior',
    description: 'Stretch, drape, shrinkage, and care instructions',
    path: '/materials/fabric-behavior',
  },
];

export default function Materials() {
  const navigate = useNavigate();

  return (
    <PageWrapper title="Materials" showBackButton>
      <Text mb={4}>
        This page explains different types of materials used in sewing, including fabrics, trims, and other supplies.
      </Text>

      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={{ base: 3, md: 4 }}>
        {widgets.map((widget) => (
          <Box
            key={widget.id}
            p={{ base: 3, md: 4 }}
            bg="brand.700"
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