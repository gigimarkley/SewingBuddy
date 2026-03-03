import { Text, Box } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import { WikiSection } from '../../types';
import WikiPage from '../../components/WikiPage';

export default function HandNeedles() {
  const introSections: WikiSection[] = [
    {
      id: 'intro',
      title: 'Introduction to Hand Sewing Needles',
      content:
        'A hand sewing needle is a slender tool with a pointed tip and an eye for thread. Different needle types are designed for specific fabrics, threads, and techniques.',
    },
    {
      id: 'sizing',
      title: 'Needle Sizing',
      content:
        'Needle sizes typically range from 1 to 12 (or higher in specialty needles). Within a needle type, higher numbers indicate finer, shorter needles, while lower numbers are thicker and longer.',
    },
    {
      id: 'selection',
      title: 'Selecting the Right Needle',
      content:
        'When selecting a needle, consider the fabric type (woven vs knit), thread thickness, and whether you need a sharp or blunt point.',
    },
    {
      id: 'anatomy',
      title: 'Hand Needle Anatomy',
      content:
        'Understanding the parts of a hand sewing needle can help you choose the right one for your project.',
    },
    {
      id: 'threading',
      title: 'How to Thread a Hand Sewing Needle',
      content:
        'Threading a hand sewing needle can be tricky, especially with smaller needles. Here are some tips to make it easier:',
      subsections: [
        {
          id: 'cutting-thread',
          title: '1. Cut a length of thread',
          content:
            'Cut a length of thread about 18-24 inches long. Longer threads can tangle more easily, while shorter threads may require more frequent re-threading.',
        },
        {
          id: 'moistening',
          title: '2. Moisten the end',
          content:
            'Lightly moisten the end of the thread with water or saliva to help it pass through the eye of the needle more easily.',
        },
        {
          id: 'guiding',
          title: '3. Guide the thread through the eye',
          content:
            'Hold the needle steady and guide the moistened end of the thread through the eye from front to back. You can use a needle threader if you have difficulty seeing the eye or threading it by hand.',
        },
        {
          id: 'pulling-through',
          title: '4. Pull the thread through',
          content:
            'Once the thread is through the eye, pull it through until you have an even length on both sides of the needle. This will give you more control while sewing.',
        },
        {
          id: 'knotting',
          title: '5. Tie a knot (optional)',
          content:
            'You can tie a small knot at the end of the thread to prevent it from slipping through the fabric while sewing. Alternatively, leaving it unknotted allows for easier removal later.',
        },
      ],
    },

    {
      id: 'types',
      title: 'Types of Hand Sewing Needles',
      content:
        'There are various types of hand sewing needles, each designed for specific tasks. The most common types include Sharps, Betweens (Quilting), Darners, Milliners (Straw), Chenille, Crewel (Embroidery), Tapestry, Beading, Leather (Glover), Upholstery/Curved, and Sashiko needles.',
      subsections: [
        {
          id: 'sharps',
          title: 'Sharps',
          content:
            'Sharps are the standard hand sewing needle. They are medium-length with a round eye and sharp point, making them suitable for most general sewing, garment construction, and patching.',
        },
        {
          id: 'betweens',
          title: 'Betweens (Quilting)',
          content:
            'Betweens are shorter and finer than sharps, with a small round eye and sharp point. Their shorter length allows for quicker, more controlled stitching.',
        },
        {
          id: 'darners',
          title: 'Darners',
          content:
            'Darners are longer than sharps and have larger eyes, allowing thicker threads or yarn to pass through easily.',
        },
        {
          id: 'milliners',
          title: 'Milliners (Straw)',
          content:
            'Milliners needles are longer than standard sharps and have round eyes. They are slim and strong, allowing for long, even stitches.',
        },
        {
          id: 'chenille',
          title: 'Chenille',
          content:
            'Chenille needles resemble tapestry needles but have a sharp point and a large, long eye to accommodate thicker embroidery threads or ribbon.',
        },
        {
          id: 'crewel',
          title: 'Crewel (Embroidery)',
          content:
            'Crewel needles are similar in length to sharps but have a longer, wider eye to accommodate multiple strands of embroidery floss.',
        },
        {
          id: 'tapestry',
          title: 'Tapestry',
          content:
            'Tapestry needles have a blunt, rounded tip and a large eye. The blunt tip pushes between fabric fibers instead of piercing them.',
        },
        {
          id: 'beading',
          title: 'Beading',
          content:
            'Beading needles are extremely fine and flexible with very narrow eyes, allowing them to pass through small beads multiple times.',
        },
        {
          id: 'leather',
          title: 'Leather (Glover)',
          content:
            'Leather needles have a triangular or wedge-shaped point designed to pierce tough materials cleanly without tearing.',
        },
        {
          id: 'upholstery',
          title: 'Upholstery / Curved',
          content:
            'Upholstery needles are heavy-duty and may be straight or curved. They are designed for deep, structural stitching.',
        },
        {
          id: 'sashiko',
          title: 'Sashiko',
          content:
            'Sashiko needles are long, rigid, and very sharp, designed specifically for traditional Japanese sashiko embroidery.',
        },
      ],
    },
  ];

  return (
    <PageWrapper title="Hand Sewing Needles">
      <WikiPage
        title="Introduction to Hand Sewing Needles"
        sections={introSections}
      />
    </PageWrapper>
  );
}
