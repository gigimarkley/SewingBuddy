import { Grid, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import Widget from '../../components/Widget';
import { WidgetData } from '../../types';

const widgets: WidgetData[] = [
  {
    id: 1,
    title: 'Hand Sewing Needles',
    description:
      'Reference chart of hand sewing needles, eye shapes, and points',
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
  return (
    <PageWrapper title="Tools" showHeaderButtons>
      <Text mb={4}>
        This page covers different types of tools, including hand tools, machine
        tools, and sewing accessories.
      </Text>

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
            bgColor="brand.400"
            shadowColor="black"
          />
        ))}
      </Grid>
    </PageWrapper>
  );
}
