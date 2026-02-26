import { Grid } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import Widget from '../../components/Widget';
import { WidgetData } from '../../types';

const widgets: WidgetData[] = [
  {
    id: 1,
    title: 'Machine Needle Charts',
    description:
      'Overview of needle types, sizes, and points for machine sewing.',
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
    description:
      'Learn how to adjust upper thread tension for different fabrics and stitches.',
    path: '/tools/tension',
  },
  {
    id: 4,
    title: 'Bobbin',
    description:
      'Guide to bobbin types, winding, threading, and troubleshooting.',
    path: '/tools/bobbin',
  },
  {
    id: 5,
    title: 'Stitch Length & Width',
    description:
      'Adjust stitch length and width for different stitch types and techniques.',
    path: '/tools/machine-stitch-length-width',
  },
];

export default function MachineSewing() {
  return (
    <PageWrapper title="Machine Sewing" showHeaderButtons>
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
            bgColor="brand.500"
            shadowColor="black"
          />
        ))}
      </Grid>
    </PageWrapper>
  );
}
