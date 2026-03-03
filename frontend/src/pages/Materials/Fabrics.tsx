import { Box, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import { WikiSection } from '../../types';
import WikiPage from '../../components/WikiPage';

export default function Fabrics() {
  const fabricSections: WikiSection[] = [
    {
      id: 'intro',
      title: 'Introduction to Fabrics',
      content:
        'Fabrics come in a wide range of fibers, weaves, and textures. Understanding their characteristics helps you select the right fabric for your sewing projects and ensures better results.',
    },
    {
      id: 'natural-fibers',
      title: 'Natural Fibers',
      content:
        'Natural fibers are derived from plants or animals. They generally breathe well and have a comfortable hand.',
      subsections: [
        {
          id: 'cotton',
          title: 'Cotton',
          content:
            'Cotton is soft, durable, and versatile. Commonly used in shirts, dresses, and quilting fabrics. Pre-wash to prevent shrinkage.',
        },
        {
          id: 'linen',
          title: 'Linen',
          content:
            'Linen is crisp, breathable, and ideal for summer garments. It wrinkles easily and may shrink slightly; pre-washing is recommended.',
        },
        {
          id: 'silk',
          title: 'Silk',
          content:
            'Silk is smooth, lustrous, and drapes beautifully. Handle gently and follow care instructions carefully to avoid damage.',
        },
        {
          id: 'wool',
          title: 'Wool',
          content:
            'Wool is warm, resilient, and excellent for jackets, coats, and knitwear. Be mindful of felting and shrinking; dry-cleaning is often recommended.',
        },
      ],
    },
    {
      id: 'synthetic-fibers',
      title: 'Synthetic Fibers',
      content:
        'Synthetic fibers are man-made, often from petroleum products. They can mimic natural fibers and are usually more durable and resistant to wrinkling.',
      subsections: [
        {
          id: 'polyester',
          title: 'Polyester',
          content:
            'Polyester is strong, wrinkle-resistant, and widely used in apparel and home textiles. Often blended with natural fibers for comfort and performance.',
        },
        {
          id: 'nylon',
          title: 'Nylon',
          content:
            'Nylon is lightweight, strong, and elastic. Commonly used in activewear, linings, and sheer fabrics.',
        },
        {
          id: 'acrylic',
          title: 'Acrylic',
          content:
            'Acrylic is soft, lightweight, and wool-like. Often used in knitwear and blankets; it resists moth damage and wrinkles.',
        },
      ],
    },
    {
      id: 'weaves-and-textures',
      title: 'Weaves and Textures',
      content:
        'Fabrics can be woven, knitted, or non-woven, which affects their stretch, drape, and handling.',
      subsections: [
        {
          id: 'woven',
          title: 'Woven Fabrics',
          content:
            'Woven fabrics are made by interlacing warp and weft threads at right angles. They generally have little stretch along the grain.',
        },
        {
          id: 'knit',
          title: 'Knit Fabrics',
          content:
            'Knit fabrics are made by looping yarns together. They are stretchy, comfortable, and suitable for t-shirts, dresses, and activewear.',
        },
        {
          id: 'non-woven',
          title: 'Non-Woven Fabrics',
          content:
            'Non-woven fabrics are bonded rather than woven or knitted. Examples include interfacing, felt, and some disposable fabrics.',
        },
      ],
    },
    {
      id: 'care-instructions',
      title: 'Fabric Care',
      content:
        'Each fabric has specific care requirements to maintain its look, feel, and durability.',
      subsections: [
        {
          id: 'washing',
          title: 'Washing',
          content:
            'Check care labels: natural fibers may shrink or bleed; synthetics are usually more tolerant. Hand washing or gentle cycles are often safest for delicate fabrics.',
        },
        {
          id: 'drying',
          title: 'Drying',
          content:
            'Air drying is recommended for delicate fabrics. Tumble drying can cause shrinkage, felting, or distortion.',
        },
        {
          id: 'ironing',
          title: 'Ironing',
          content:
            'Use the appropriate temperature for each fiber. Test on a scrap fabric if unsure, and always follow manufacturer guidelines.',
        },
      ],
    },
  ];

  return (
    <PageWrapper title="Fabrics">
      <Box mb={4}>
        <Text mb={3}>
          This page contains a reference chart of fabric types, including fiber
          content, weave, and care instructions. Examples include cotton, linen,
          silk, wool, and synthetics.
        </Text>
      </Box>

      <WikiPage title="Fabrics" sections={fabricSections} />
    </PageWrapper>
  );
}
