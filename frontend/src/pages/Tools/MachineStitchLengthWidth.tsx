import { Box, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import { WikiSection } from '../../types';
import WikiPage from '../../components/WikiPage';

export default function MachineStitchLengthWidth() {
  const stitchSections: WikiSection[] = [
    {
      id: 'overview',
      title: 'Overview of Stitch Length and Width',
      content:
        'Stitch length refers to the distance between individual stitches, while stitch width refers to how wide a stitch extends, particularly for zigzag or decorative stitches. Proper adjustment ensures strong, even, and aesthetically pleasing seams.',
    },
    {
      id: 'adjusting-straight-stitches',
      title: 'Straight Stitches',
      content:
        'Straight stitches are the most common type. Adjusting stitch length affects seam strength, flexibility, and appearance.',
      subsections: [
        {
          id: 'short-straight-stitch',
          title: 'Short Stitch Length',
          content:
            'Short stitches (1–2 mm) are strong and secure, ideal for delicate fabrics or detailed work, but may pucker lightweight fabrics.',
        },
        {
          id: 'long-straight-stitch',
          title: 'Long Stitch Length',
          content:
            'Long stitches (3–4 mm) are faster for basting, gathering, or decorative topstitching. Avoid using too long for seams that need strength.',
        },
      ],
    },
    {
      id: 'adjusting-zigzag-stitches',
      title: 'Zigzag and Decorative Stitches',
      content:
        'Zigzag stitches require both length and width adjustments. Width determines the lateral spread of the stitch, while length controls stitch density.',
      subsections: [
        {
          id: 'narrow-zigzag',
          title: 'Narrow Zigzag',
          content:
            'Used for finishing fabric edges, elastic stitching, or applique. Provides flexibility without large visible stitches.',
        },
        {
          id: 'wide-zigzag',
          title: 'Wide Zigzag',
          content:
            'Ideal for decorative purposes, stretch fabrics, or when securing thick layers. Use moderate length to prevent puckering.',
        },
      ],
    },
    {
      id: 'specialty-stitches',
      title: 'Specialty and Decorative Stitches',
      content:
        'For buttonholes, overcast, or decorative stitches, adjusting length and width is essential to achieve professional results. Always test on scrap fabric.',
    },
    {
      id: 'tips',
      title: 'Tips for Adjusting Stitch Length and Width',
      content:
        'Different fabrics and threads behave differently. Adjust length and width according to fabric weight, stretch, and intended seam purpose.',
      subsections: [
        {
          id: 'test-first',
          title: 'Test First',
          content:
            'Always sew a sample on scrap fabric before stitching the final project.',
        },
        {
          id: 'lightweight-fabrics',
          title: 'Lightweight Fabrics',
          content:
            'Shorter stitches and narrower widths prevent puckering and skipped stitches.',
        },
        {
          id: 'heavy-fabrics',
          title: 'Heavy Fabrics',
          content:
            'Longer stitches and wider widths help penetrate thick layers and prevent thread breakage.',
        },
      ],
    },
  ];

  return (
    <PageWrapper title="Machine Stitch Length & Width">
      <Box mb={6}>
        <Text mb={3}>
          Adjusting stitch length and width correctly is essential for seam
          strength, fabric handling, and decorative effects. Understanding how
          these settings interact with fabric type and thread ensures
          professional results.
        </Text>
        <Text>
          Always test settings on a scrap piece of the same fabric to fine-tune
          your machine for optimal stitching.
        </Text>
      </Box>

      <WikiPage
        title="Guide to Adjusting Machine Stitch Length and Width"
        sections={stitchSections}
      />
    </PageWrapper>
  );
}
