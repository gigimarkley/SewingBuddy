import { Box, Grid, Heading, Text, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface Widget {
  id: number;
  title: string;
  description: string;
  path: string;
}

const widgets: Widget[] = [
  { id: 2, title: 'Tools', description: 'Reference charts and how-to guides for sewing tools', path: '/tools' },
  { id: 3, title: 'Calculators', description: 'Sewing and fabric calculators', path: '/calculators' },
  { id: 5, title: 'Garment Styles', description: 'Explore various garment styles', path: '/styles' },
  { id: 6, title: 'Materials', description: 'Information on fabrics, trims, and sewing supplies', path: '/materials' },
  { id: 7, title: 'Stitches and Techniques', description: 'Step-by-step guides for hand and machine stitches', path: '/stitches-techniques' },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box p={6}>
      <Heading size={{ base: 'md', md: 'lg' }} mb={4} textAlign="center">
        Sewing Buddy
      </Heading>

      {/* Dummy search bar */}
      <Input
        placeholder="Search..."
        mb={6}
        bg="white"
        borderRadius="md"
        boxShadow="sm"
        _placeholder={{ color: 'gray.400' }}
        _focus={{ outline: 'none', boxShadow: 'outline' }}
      />

      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={{ base: 3, md: 4 }}>
        {widgets.map((widget) => (
          <Box
            key={widget.id}
            p={{ base: 3, md: 4 }}
            bg="brand.500"
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
    </Box>
  );
}