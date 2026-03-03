import { Grid, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import Widget from '../../components/Widget';
import { garmentWidgets } from '../../data/widgets';

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
