import { Text } from '@chakra-ui/react';
import PageWrapper from '../components/PageWrapper';

export default function Guides() {
  return (
    <PageWrapper title="Guides">
      <Text mb={2}>
        This is the Guides page. It will house all the videos and tutorials for sewing techniques, such as hand stitches, pressing methods, and more.
      </Text>

      <Text mb={2}>
        Each guide should include written instructions and pictures to make the techniques easy to follow.
      </Text>

      <Text mb={2}>
        Users will be able to search for guides, star their favorites, and see them at the top. Additional filtering options will also be available to help users find exactly what they need.
      </Text>
    </PageWrapper>
  );
}