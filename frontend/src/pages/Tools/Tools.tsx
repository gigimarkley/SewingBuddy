import { Grid, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import Widget from '../../components/Widget';
import { toolsWidgets } from '../../data/widgets';

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
        {toolsWidgets.map((widget) => (
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
