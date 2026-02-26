import { Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';

export default function ButtonHoleSpacing() {
  return (
    <PageWrapper title="Buttonhole Spacing Calculator" showBackButton>
      <Text mb={2}>This is the Buttonhole Spacing Calculator page.</Text>

      <Text mb={2}>
        Here you will eventually be able to calculate the spacing for buttonholes based on garment measurements and the number of buttons needed.
      </Text>

      <Text mb={2}>
        The tool will allow users to input measurements such as the length of the button placket, the number of buttons, and the desired spacing between buttons to get an accurate calculation of where to place each buttonhole.
      </Text>

      <Text>
        This will help ensure that your buttonholes are evenly spaced and properly aligned for a professional finish on your garments.
      </Text>
    </PageWrapper>
  );
}