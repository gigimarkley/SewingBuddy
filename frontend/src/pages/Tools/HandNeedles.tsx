import { Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';

export default function HandNeedles() {
  return (
    <PageWrapper title="Hand Sewing Needles">
      <Text mb={2}>
        This page contains a reference chart of hand sewing needles, including
        eye shapes, lengths, and points.
      </Text>
      <Text mb={2}>
        Examples: long, round, sharp, blunt, ball-point, wedge. Images of fibers
        and needles will help identify each type.
      </Text>
    </PageWrapper>
  );
}
