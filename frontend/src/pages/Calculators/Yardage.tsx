import { Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';

export default function Yardage() {
  return (
    <PageWrapper title="Yardage">
      <Text mb={2}>This is the Yardage page.</Text>

      <Text mb={2}>
        Here you will eventually be able to do the following: take an image of a sewing pattern guide and calculate the yardage you need depending on the pattern placement on the fabric and the fabric width. Standard fabric widths are 45” and 60”.
      </Text>

      <Text mb={2}>
        You will also be able to get an estimate of the amount of fabric you need given the width of the fabric, size of the garment, and type of garment. Users can select the style, size, and width, and the tool will calculate the required yardage.
      </Text>

      <Text>
        The tool will allow selection of garment parts such as bodice, sleeve, skirt, pants/shorts, and also calculate how much trim is needed.
      </Text>
    </PageWrapper>
  );
}