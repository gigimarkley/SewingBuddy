import { Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';

export default function Bobbin() {
  return (
    <PageWrapper title="Bobbins">
      <Text mb={2}>
        This page contains information about bobbins, including types, sizing,
        and how to properly wind and use them in machine sewing.
      </Text>
    </PageWrapper>
  );
}
