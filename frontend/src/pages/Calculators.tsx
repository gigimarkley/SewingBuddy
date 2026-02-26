import { Text } from '@chakra-ui/react';
import PageWrapper from '../components/PageWrapper';

export default function Calculators() {
  return (
    <PageWrapper title="Calculators">
      <Text mb={2}>
        This is the Calculators page. It will provide tools for sewing techniques that require math.
      </Text>

      <Text mb={2}>
        <strong>Circle Skirt Calculator:</strong> Easily calculate the fabric needed for different circle skirt sizes.
      </Text>

      <Text mb={2}>
        <strong>Fabric Conversion Calculator:</strong> Convert between inches, feet, yards, centimeters, and meters quickly.
      </Text>

      <Text mb={2}>
        <strong>Thread Consumption Calculator:</strong> Learn how to calculate the amount of thread needed to make a garment.
      </Text>

      <Text mb={2}>
        <strong>Pleated Skirt and Tucks Calculators:</strong> Determine fabric requirements for pleats and tucks.
      </Text>

      <Text mb={2}>
        <strong>Binding Fabric Calculator:</strong> Calculate how much fabric is needed for bindings.
      </Text>

      <Text>
        <strong>Standard and Metric Conversion:</strong> Quickly convert measurements for any sewing project.
      </Text>
    </PageWrapper>
  );
}