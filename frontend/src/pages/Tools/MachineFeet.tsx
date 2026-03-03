import { Box, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import { WikiSection } from '../../types';
import WikiPage from '../../components/WikiPage';

export default function MachineFeet() {
  const machineFeetSections: WikiSection[] = [
    {
      id: 'presser-foot-overview',
      title: 'Presser Foot Overview',
      content:
        'A presser foot is the part of the sewing machine that holds the fabric flat as it is stitched. Different feet are designed for various techniques and fabrics.',
    },
    {
      id: 'all-purpose-foot',
      title: 'All-Purpose / Standard Foot',
      content:
        'The standard foot that comes with most sewing machines, suitable for straight and zigzag stitching on medium-weight fabrics.',
      subsections: [
        {
          id: 'all-purpose-best-for',
          title: 'Best For',
          content:
            'General sewing on cotton, polyester blends, and woven fabrics.',
        },
      ],
    },
    {
      id: 'walking-foot',
      title: 'Walking Foot / Even Feed Foot',
      content:
        'A walking foot has feed dogs that help move multiple layers of fabric evenly to prevent shifting.',
      subsections: [
        {
          id: 'walking-best-for',
          title: 'Best For',
          content:
            'Quilting, sewing multiple layers, slippery fabrics, and matching patterns.',
        },
      ],
    },
    {
      id: 'zipper-foot',
      title: 'Zipper Foot',
      content:
        'A narrow foot that allows stitching close to the teeth of zippers, enabling precise seam placement.',
      subsections: [
        {
          id: 'zipper-best-for',
          title: 'Best For',
          content: 'Zippers, piping, topstitching along edges.',
        },
      ],
    },
    {
      id: 'buttonhole-foot',
      title: 'Buttonhole Foot',
      content:
        'A specialized foot that helps create evenly sized buttonholes with the machine’s buttonhole function.',
      subsections: [
        {
          id: 'buttonhole-note',
          title: 'Note',
          content:
            'Some machines come with adjustable buttonhole feet for different button sizes.',
        },
      ],
    },
    {
      id: 'blind-hem-foot',
      title: 'Blind Hem Foot',
      content:
        'Designed for blind hems, this foot helps guide the fabric so that stitching is nearly invisible on the front side.',
      subsections: [
        {
          id: 'blind-hem-best-for',
          title: 'Best For',
          content:
            'Hemming skirts, pants, and sleeves with minimal visible stitching.',
        },
      ],
    },
    {
      id: 'edge-stitch-foot',
      title: 'Edge Stitch / Topstitch Foot',
      content:
        'Has a guide that helps maintain a consistent distance from the fabric edge for straight, accurate stitching.',
      subsections: [
        {
          id: 'edge-stitch-best-for',
          title: 'Best For',
          content:
            'Topstitching, edge stitching, decorative stitching along seams or hems.',
        },
      ],
    },
    {
      id: 'rolled-hem-foot',
      title: 'Rolled Hem Foot',
      content:
        'Rolls the fabric edge under while stitching, creating a narrow, neat hem automatically.',
      subsections: [
        {
          id: 'rolled-hem-best-for',
          title: 'Best For',
          content: 'Lightweight fabrics like chiffon, silk, and organza.',
        },
      ],
    },
    {
      id: 'walking-foot-note',
      title: 'Additional Notes',
      content:
        'Other specialty feet exist for quilting, embroidery, pintucks, gathering, and cording. Check your machine’s compatibility before purchasing.',
    },
  ];

  return (
    <PageWrapper title="Machine Feet">
      <Box mb={6}>
        <Text mb={3}>
          Sewing machine feet are attachments that hold and guide fabric while
          stitching. Different feet are designed for specific techniques, fabric
          types, and decorative finishes.
        </Text>
        <Text mb={3}>
          Choosing the right foot improves stitch quality, prevents fabric
          shifting, and allows more precise sewing. Many machines come with a
          set of standard feet, and additional specialty feet can be purchased
          separately.
        </Text>
      </Box>

      <WikiPage title="Types of Machine Feet" sections={machineFeetSections} />
    </PageWrapper>
  );
}
