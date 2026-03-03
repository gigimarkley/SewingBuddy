import { Box, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import { WikiSection } from '../../types';
import WikiPage from '../../components/WikiPage';

export default function FabricBehavior() {
  const fabricBehaviorSections: WikiSection[] = [
    {
      id: 'intro',
      title: 'Introduction to Fabric Behavior',
      content:
        'Understanding fabric behavior is key to successful sewing projects. Different fabrics respond differently to stretch, drape, shrinkage, and finishing techniques.',
    },
    {
      id: 'stretch',
      title: 'Stretch and Recovery',
      content:
        'Some fabrics, such as knits, have natural stretch. It is important to choose appropriate needles, stitches, and seam finishes to accommodate the stretch.',
      subsections: [
        {
          id: 'knits',
          title: 'Knits',
          content:
            'Knit fabrics stretch across the width and sometimes the length. Use stretch or ballpoint needles and stitches like zigzag or stretch stitch to prevent skipped stitches or fabric damage.',
        },
        {
          id: 'wovens',
          title: 'Wovens',
          content:
            'Most woven fabrics have little to no stretch. Be careful with bias cuts and consider stabilizing with interfacing when needed.',
        },
      ],
    },
    {
      id: 'drape',
      title: 'Drape and Hand',
      content:
        'Drape refers to how a fabric falls or hangs. Fabrics with soft drape are suitable for flowing garments, while stiff fabrics hold structured shapes.',
      subsections: [
        {
          id: 'soft-drape',
          title: 'Soft Drape Fabrics',
          content:
            'Chiffon, silk, and lightweight rayon have soft drape, ideal for blouses, dresses, and fluid skirts.',
        },
        {
          id: 'stiff-drape',
          title: 'Stiff Drape Fabrics',
          content:
            'Denim, canvas, and taffeta have stiff drape, suitable for jackets, pants, and structured skirts.',
        },
      ],
    },
    {
      id: 'shrinkage',
      title: 'Shrinkage and Pre-Washing',
      content:
        'Most natural fabrics shrink slightly when first washed. Always pre-wash fabrics according to care instructions to prevent finished garments from distorting.',
      subsections: [
        {
          id: 'cotton',
          title: 'Cotton',
          content:
            'Cotton tends to shrink in the first wash. Pre-wash and press before cutting.',
        },
        {
          id: 'wool',
          title: 'Wool',
          content:
            'Wool may shrink or felt if washed improperly. Follow fiber-specific care instructions.',
        },
      ],
    },
    {
      id: 'bias-grain',
      title: 'Grain, Bias, and Cutting',
      content:
        'The grain of the fabric and the bias affect how a garment will behave after sewing. Understanding this helps prevent distortion and ensures proper drape.',
      subsections: [
        {
          id: 'fabric-grain',
          title: 'Fabric Grain',
          content:
            'The straight grain runs parallel to the selvage and is the most stable direction of the fabric. Always align patterns with the grain unless instructed otherwise.',
        },
        {
          id: 'bias-cut',
          title: 'Bias and Bias Cut',
          content:
            'The bias runs at a 45° angle to the grain. Fabric cut on the bias stretches more and drapes fluidly. Bias cuts are often used for bias skirts, binding, or when extra stretch is desired.',
        },
      ],
    },
    {
      id: 'care',
      title: 'Fabric Care and Finishing',
      content:
        'Understanding care instructions ensures garments maintain their shape and appearance over time. Pay attention to washing, drying, and ironing recommendations.',
      subsections: [
        {
          id: 'washing',
          title: 'Washing',
          content:
            'Follow care labels; some fabrics require gentle cycles, cold water, or hand washing.',
        },
        {
          id: 'drying',
          title: 'Drying',
          content:
            'Air-dry delicate fabrics; tumble drying may shrink or distort certain fibers.',
        },
        {
          id: 'ironing',
          title: 'Ironing',
          content:
            'Use appropriate temperature settings for each fabric. Test on a scrap piece if unsure.',
        },
      ],
    },
  ];

  return (
    <PageWrapper title="Fabric Behavior">
      <Box mb={4}>
        <Text mb={3}>
          This page explains how different fabrics behave when sewn, including
          stretch, drape, shrinkage, grain, bias, and care instructions.
        </Text>
      </Box>

      <WikiPage title="Fabric Behavior" sections={fabricBehaviorSections} />
    </PageWrapper>
  );
}
