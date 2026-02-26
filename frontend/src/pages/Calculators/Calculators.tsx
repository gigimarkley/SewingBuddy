import { Grid } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import Widget from '../../components/Widget';
import { WidgetData } from '../../types';

const widgets: WidgetData[] = [
  {
    id: 1,
    title: 'Yardage Calculator',
    description: 'Calculate how much fabric you need for your garment.',
    path: '/calculators/yardage',
  },
  {
    id: 2,
    title: 'Circle Skirt Calculator',
    description:
      'Easily calculate the fabric needed for different circle skirt sizes.',
    path: '/calculators/circle-skirt',
  },
  {
    id: 3,
    title: 'Unit Conversion Calculator',
    description:
      'Convert between inches, feet, yards, centimeters, and meters quickly.',
    path: '/calculators/unit-conversion',
  },
  {
    id: 4,
    title: 'Thread Consumption Calculator',
    description:
      'Learn how to calculate the amount of thread needed for a garment.',
    path: '/calculators/thread-consumption',
  },
  {
    id: 5,
    title: 'Pleated Skirt & Tucks Calculators',
    description: 'Determine fabric requirements for pleats and tucks.',
    path: '/calculators/pleated-tucks',
  },
  {
    id: 6,
    title: 'Binding Fabric Calculator',
    description: 'Calculate how much fabric is needed for bindings.',
    path: '/calculators/binding-fabric',
  },
  {
    id: 7,
    title: 'Trim Yardage Calculator',
    description: 'Calculate how much trim you need for your garment.',
    path: '/calculators/trim-yardage',
  },
  {
    id: 8,
    title: 'Buttonhole Spacing Calculator',
    description:
      'Calculate the spacing for buttonholes based on garment measurements.',
    path: '/calculators/buttonhole-spacing',
  },
];

export default function Calculators() {
  return (
    <PageWrapper title="Calculators" showHeaderButtons>
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
