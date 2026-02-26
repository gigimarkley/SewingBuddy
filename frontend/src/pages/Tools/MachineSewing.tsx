import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';

interface SectionWidget {
  id: number;
  title: string;
  description: string;
  path: string; // add path for navigation
}

const widgets: SectionWidget[] = [
  {
    id: 1,
    title: 'Machine Needle Charts',
    description: 'Overview of needle types, sizes, and points for machine sewing.',
    path: '/tools/machine-needles',
  },
  {
    id: 2,
    title: 'Machine Foot Charts',
    description: 'Guide to all presser feet and their uses.',
    path: '/tools/machine-feet',
  },
  {
    id: 3,
    title: 'Tension',
    description: 'Learn how to adjust upper thread tension for different fabrics and stitches.',
    path: '/tools/tension',
  },
  {
    id: 4,
    title: 'Bobbin',
    description: 'Guide to bobbin types, winding, threading, and troubleshooting.',
    path: '/tools/bobbin',
  },
  {
    id: 5,
    title: 'Stitch Length & Width',
    description: 'Adjust stitch length and width for different stitch types and techniques.',
    path: '/tools/machine-stitch-length-width',
  },
];

export default function MachineSewing() {
  const navigate = useNavigate();

  return (
    <PageWrapper title="Machine Sewing" showBackButton>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={{ base: 3, md: 4 }}>
        {widgets.map((widget) => (
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