import { Box, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import { WikiSection } from '../../types';
import WikiPage from '../../components/WikiPage';

export default function Tension() {
  const tensionSections: WikiSection[] = [
    {
      id: 'tension-overview',
      title: 'What is Thread Tension?',
      content:
        'Thread tension refers to the tightness of the upper thread on a sewing machine. Correct tension ensures even stitches and prevents puckering or looping.',
    },
    {
      id: 'adjusting-tension',
      title: 'Adjusting Upper Thread Tension',
      content:
        'Most machines have a numbered dial to control upper thread tension. Turning the dial increases or decreases the tightness of the stitch.',
      subsections: [
        {
          id: 'adjusting-lightweight',
          title: 'Lightweight Fabrics',
          content:
            'For delicate fabrics like silk, chiffon, or organza, lower tension settings are usually required to prevent puckering.',
        },
        {
          id: 'adjusting-medium',
          title: 'Medium Fabrics',
          content:
            'For cotton, linen, or polyester blends, standard tension settings work well in most cases.',
        },
        {
          id: 'adjusting-heavy',
          title: 'Heavy Fabrics',
          content:
            'For denim, canvas, or multiple layers, increase tension slightly to maintain even stitches.',
        },
      ],
    },
    {
      id: 'stitch-type-impact',
      title: 'Impact of Stitch Type',
      content:
        'Different stitches may require tension adjustments. For example, zigzag, decorative, or stretch stitches often need lower tension than straight stitches.',
    },
    {
      id: 'balancing-upper-lower',
      title: 'Balancing Upper and Bobbin Threads',
      content:
        'Proper stitch formation depends on both upper thread tension and bobbin tension. Most of the time, only the upper tension needs adjustment, but check your manual for specific fabrics.',
    },
    {
      id: 'common-problems',
      title: 'Common Tension Problems',
      content:
        'Incorrect tension can cause loops on the underside, thread breakage, puckering, or uneven stitches.',
      subsections: [
        {
          id: 'loops-underside',
          title: 'Loops on Underside',
          content:
            'Usually caused by upper thread being too loose. Increase upper tension slightly.',
        },
        {
          id: 'puckering',
          title: 'Puckering',
          content:
            'Fabric puckering often results from upper thread being too tight. Reduce tension and test on a scrap piece.',
        },
        {
          id: 'uneven-stitches',
          title: 'Uneven Stitches',
          content:
            'May occur when upper and bobbin threads are not balanced. Adjust upper tension and check bobbin.',
        },
      ],
    },
  ];

  return (
    <PageWrapper title="Thread Tension">
      <Box mb={6}>
        <Text mb={3}>
          Thread tension affects stitch quality, appearance, and fabric
          handling. Adjusting tension properly ensures smooth, even stitches
          across all fabrics.
        </Text>
        <Text mb={3}>
          Always test tension settings on a scrap piece of fabric before
          starting your project, especially when switching fabric types or
          stitch patterns.
        </Text>
      </Box>

      <WikiPage
        title="Adjusting Machine Thread Tension"
        sections={tensionSections}
      />
    </PageWrapper>
  );
}
