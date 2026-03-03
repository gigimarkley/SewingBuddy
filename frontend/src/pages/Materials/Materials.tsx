import { Grid, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import Widget from '../../components/Widget';
import { WidgetData } from '../../types';
import { materialsWidgets } from '../../data/widgets';

export default function Materials() {
  return (
    <PageWrapper title="Materials" showHeaderButtons>
      <Text mb={4}>
        This page explains different types of materials used in sewing,
        including fabrics, trims, and other supplies.
      </Text>

      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={{ base: 3, md: 4 }}
      >
        {materialsWidgets.map((widget) => (
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
