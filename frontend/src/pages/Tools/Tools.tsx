import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';

interface ToolWidget {
  id: number;
  title: string;
  description: string;
  path: string;
}

const widgets: ToolWidget[] = [
  {
    id: 1,
    title: 'Hand Sewing Needles',
    description: 'Reference chart of hand sewing needles, eye shapes, and points',
    path: '/tools/hand-needles',
  },
  {
    id: 2,
    title: 'Machine Sewing',
    description: 'Needle charts, foot charts, and how-to guides for machines',
    path: '/tools/machine-sewing',
  },
];

export default function Tools() {
  const navigate = useNavigate();

  return (
    <PageWrapper title="Tools" showBackButton>
      <Text mb={4}>
        This page covers different types of tools, including hand tools, machine tools, and sewing accessories.
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