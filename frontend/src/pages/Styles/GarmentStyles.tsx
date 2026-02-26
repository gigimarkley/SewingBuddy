import { Grid, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import Widget from '../../components/Widget';
import { WidgetData } from '../../types';

const garmentWidgets: WidgetData[] = [
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
  return (
    <PageWrapper title="Garment Styles" showHeaderButtons>
      <Text mb={4}>
        This page explores various garment styles, including dresses, tops,
        pants, and more. Click on each style to see detailed information, sewing
        tips, and examples.
      </Text>

      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={{ base: 3, md: 4 }}
      >
        {garmentWidgets.map((widget) => (
          <Widget
            key={widget.id}
            title={widget.title}
            description={widget.description}
            path={widget.path}
            bgColor="brand.400"
            shadowColor="black"
          />
        ))}
      </Grid>
    </PageWrapper>
  );
}
