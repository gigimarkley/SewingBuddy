import { Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';

export default function Fabrics() {
  return (
    <PageWrapper title="Fabrics">
      <Text mb={2}>
        This page contains a reference chart of fabric types, including fiber
        content, weave, and care instructions.
      </Text>
      <Text mb={2}>
        Examples: cotton, linen, silk, wool, synthetic. Images of fibers and
        fabrics will help identify each type.
      </Text>
    </PageWrapper>
  );
}
