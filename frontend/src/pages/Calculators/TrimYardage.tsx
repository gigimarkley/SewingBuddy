import { Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';

export default function TrimYardage() {
  return (
    <PageWrapper title="Trim Yardage Calculator" showBackButton>
      <Text mb={2}>This is the Trim Yardage Calculator page.</Text>

      <Text mb={2}>
        Here you will eventually be able to calculate how much trim you need for your garment based on the type of trim, placement, and garment measurements.
      </Text>

      <Text mb={2}>
        The tool will allow selection of trim types such as lace, ribbon, piping, and bias tape, and calculate the required yardage based on the length of the garment edges where the trim will be applied.
      </Text>

      <Text>
        Users can input measurements for necklines, sleeves, hemlines, and other areas where trim will be added to get an accurate estimate of the amount of trim needed.
      </Text>
    </PageWrapper>
  );
}