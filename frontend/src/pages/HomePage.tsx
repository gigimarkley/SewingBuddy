import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface Widget {
  id: number;
  title: string;
  description: string;
  path: string; // route to navigate
}

const widgets: Widget[] = [
  { id: 1, title: 'Yardage', description: 'Calculate fabric yardage', path: '/yardage' },
  { id: 2, title: 'Guides', description: 'Step-by-step sewing guides', path: '/guides' },
  { id: 3, title: 'Calculators', description: 'Sewing and fabric calculators', path: '/calculators' },
  { id: 4, title: 'Types', description: 'Types of fabrics and stitches', path: '/types' },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box p={6}>
      <Heading size={{ base: 'md', md: 'lg' }} mb={6} textAlign="center">
        Home
      </Heading>

      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={{ base: 3, md: 4 }}>
        {widgets.map((widget) => (
          <Box
            key={widget.id}
            p={{ base: 3, md: 4 }}
            bg="brand.500" 
            color="white"
            borderRadius="md"
            boxShadow="sm"
            _hover={{ boxShadow: 'md', cursor: 'pointer', transform: 'scale(1.02)', transition: 'all 0.2s' }}
            onClick={() => navigate(widget.path)}
          >
            <Heading size="sm" mb={2}>
              {widget.title}
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{widget.description}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}