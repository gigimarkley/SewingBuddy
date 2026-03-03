import { Grid } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import Widget from '../../components/Widget';
import { calculatorsWidgets } from '../../data/widgets';

export default function Calculators() {
  return (
    <PageWrapper title="Calculators" showHeaderButtons>
      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={{ base: 3, md: 4 }}
      >
        {calculatorsWidgets.map((widget) => (
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
