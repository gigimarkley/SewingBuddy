import { Grid } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import Widget from '../../components/Widget';
import { machineSewingWidgets } from '../../data/widgets';

export default function MachineSewing() {
  return (
    <PageWrapper title="Machine Sewing" showHeaderButtons>
      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={{ base: 3, md: 4 }}
      >
        {machineSewingWidgets.map((widget) => (
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
