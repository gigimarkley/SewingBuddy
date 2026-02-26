import { Text } from '@chakra-ui/react';
import PageWrapper from '../components/PageWrapper';

export default function Types() {
  return (
    <PageWrapper title="Types">
      <Text mb={2}>
        This is the Types page. It will eventually include reference charts and guides for sewing tools and garment types.
      </Text>

      <Text mb={2}>
        <strong>Hand Sewing Needle Chart:</strong> Needles are available with different eye shapes (long, round, etc.), lengths, and points (sharp, round, blunt, ball-point, wedge). Fiber images will help identify each type.
      </Text>

      <Text mb={2}>
        <strong>Machine Sewing:</strong> This will include machine needle charts, machine foot charts, and instructions on how to use them. This information will also be referenced in the How-To Guides.
      </Text>

      <Text mb={2}>
        <strong>Garment Types:</strong> Types of necklines, sleeves, pants, and skirts will be explained with illustrations and examples.
      </Text>
    </PageWrapper>
  );
}