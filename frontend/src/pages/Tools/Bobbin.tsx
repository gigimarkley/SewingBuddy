import { Box, Text } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import { WikiSection } from '../../types';
import WikiPage from '../../components/WikiPage';

export default function Bobbin() {
  const bobbinSections: WikiSection[] = [
    {
      id: 'bobbin-overview',
      title: 'What is a Bobbin?',
      content:
        'A bobbin is a small spool that holds the lower thread in a sewing machine. It works in tandem with the upper thread to create stitches.',
    },
    {
      id: 'types-of-bobbins',
      title: 'Types of Bobbins',
      content:
        'Bobbins come in different sizes and shapes depending on your machine. Using the correct type ensures proper stitch formation.',
      subsections: [
        {
          id: 'class15-bobbin',
          title: 'Class 15 / Standard Bobbin',
          content:
            'Commonly used in domestic machines. Fits most older and modern home sewing machines.',
        },
        {
          id: 'class66-bobbin',
          title: 'Class 66 / Plastic Bobbin',
          content:
            'Often used in modern machines with a top-loading bobbin system.',
        },
        {
          id: 'metal-bobbins',
          title: 'Metal Bobbins',
          content:
            'Used in industrial machines or older home machines. Provides durability and even tension.',
        },
      ],
    },
    {
      id: 'winding-bobbin',
      title: 'How to Wind a Bobbin',
      content:
        'Most machines have a bobbin winding mechanism. Thread the bobbin according to the machine’s guide and engage the winder to fill evenly.',
      subsections: [
        {
          id: 'manual-wind',
          title: 'Manual Bobbin Winding',
          content:
            'Some older machines require manual winding. Turn the hand wheel slowly to avoid uneven filling.',
        },
        {
          id: 'automatic-wind',
          title: 'Automatic Bobbin Winding',
          content:
            'Modern machines often stop automatically when the bobbin is full. Always check that the thread is taut and even.',
        },
      ],
    },
    {
      id: 'inserting-bobbin',
      title: 'Inserting the Bobbin',
      content:
        'Insert the bobbin into the bobbin case or top-loading compartment according to the machine’s instructions. Ensure the thread feeds in the correct direction for proper tension.',
      subsections: [
        {
          id: 'bobbin-thread-direction',
          title: 'Thread Direction',
          content:
            'Most bobbins have a clockwise or counterclockwise orientation. Incorrect direction can cause loose stitches or thread jams.',
        },
      ],
    },
    {
      id: 'common-bobbin-problems',
      title: 'Common Bobbin Problems',
      content:
        'Improper bobbin setup can lead to uneven stitches, thread bunching, or machine jams.',
      subsections: [
        {
          id: 'uneven-stitches',
          title: 'Uneven Stitches',
          content:
            'Usually caused by incorrect bobbin tension or improper threading of the bobbin case.',
        },
        {
          id: 'thread-jamming',
          title: 'Thread Jamming',
          content:
            'Can occur if the bobbin is not inserted properly or the bobbin case is dirty.',
        },
        {
          id: 'bobbin-slipping',
          title: 'Bobbin Slipping',
          content:
            'Occurs if the bobbin is not wound evenly or is the wrong size for the machine.',
        },
      ],
    },
  ];

  return (
    <PageWrapper title="Bobbins">
      <Box mb={6}>
        <Text mb={3}>
          Bobbins hold the lower thread in a sewing machine and are essential
          for forming balanced stitches. Proper winding, insertion, and thread
          direction are critical for smooth stitching.
        </Text>
        <Text mb={3}>
          Bobbins come in various types and sizes, and the correct one depends
          on your machine. Always follow your machine’s manual for bobbin
          handling.
        </Text>
      </Box>

      <WikiPage title="Types and Use of Bobbins" sections={bobbinSections} />
    </PageWrapper>
  );
}
