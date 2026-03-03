import { Grid, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import Widget from '../../components/Widget';
import { stitchesTechniquesWidgets } from '../../data/widgets';

export default function StitchesTechniques() {
  return (
    <PageWrapper title="Stitches and Techniques" showHeaderButtons>
      <Text mb={4}>
        This page explains different types of hand and machine stitches, their
        uses, and how to adjust stitch settings on your sewing machine.
      </Text>

      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={{ base: 3, md: 4 }}
      >
        {stitchesTechniquesWidgets.map((widget) => (
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
