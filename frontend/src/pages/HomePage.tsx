import { Box, Grid, Heading, Input } from '@chakra-ui/react';
import Widget from '../components/Widget';
import { WidgetData } from '../types';
import PageWrapper from '../components/PageWrapper';

const widgets: WidgetData[] = [
  {
    id: 2,
    title: 'Tools',
    description: 'Reference charts and how-to guides for sewing tools',
    path: '/tools',
  },
  {
    id: 3,
    title: 'Calculators',
    description: 'Sewing and fabric calculators',
    path: '/calculators',
  },
  {
    id: 5,
    title: 'Garment Styles',
    description: 'Explore various garment styles',
    path: '/styles',
  },
  {
    id: 6,
    title: 'Materials',
    description: 'Information on fabrics, trims, and sewing supplies',
    path: '/materials',
  },
  {
    id: 7,
    title: 'Stitches and Techniques',
    description: 'Step-by-step guides for hand and machine stitches',
    path: '/stitches-techniques',
  },
];

export default function HomePage() {
  return (
    <PageWrapper showHeaderButtons={false}>
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

      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={{ base: 3, md: 4 }}
      >
        {widgets.map((widget) => (
          <Widget
            key={widget.id}
            title={widget.title}
            description={widget.description}
            path={widget.path}
            bgColor="brand.300"
            shadowColor="black"
          />
        ))}
      </Grid>
    </PageWrapper>
  );
}
