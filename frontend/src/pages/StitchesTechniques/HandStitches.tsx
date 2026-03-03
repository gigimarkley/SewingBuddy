import PageWrapper from '../../components/PageWrapper';
import WikiPage from '../../components/WikiPage';
import { WikiSection } from '../../types';

export default function HandStitches() {
  const handStitchSections: WikiSection[] = [
    {
      id: 'running-stitch',
      title: 'Running Stitch',
      content:
        'The running stitch is the simplest hand stitch, made with small, even stitches in a straight line. Useful for basting, seams, and gathering.',
      subsections: [
        {
          id: 'running-stitch-usage',
          title: 'How to Use',
          content:
            'Use for temporary stitching (basting) or simple seams. Adjust stitch length based on fabric and purpose.',
        },
      ],
    },
    {
      id: 'backstitch',
      title: 'Backstitch',
      content:
        'A strong stitch that creates a continuous line by stitching backward. Ideal for seams that require strength.',
      subsections: [
        {
          id: 'backstitch-usage',
          title: 'How to Use',
          content:
            'Use for hand-sewn seams that need durability. Stitch backward from the previous stitch to form a solid line.',
        },
      ],
    },
    {
      id: 'whipstitch',
      title: 'Whipstitch',
      content:
        'A stitch that loops over the edge of the fabric, commonly used for finishing edges or sewing seams together.',
      subsections: [
        {
          id: 'whipstitch-usage',
          title: 'How to Use',
          content:
            'Use to join fabric edges, secure hems, or appliqué pieces. Stitch evenly around the edge for a neat finish.',
        },
      ],
    },
    {
      id: 'slipstitch',
      title: 'Slip Stitch',
      content:
        'An invisible stitch used for hemming or closing seams by hand without visible stitches on the right side.',
      subsections: [
        {
          id: 'slipstitch-usage',
          title: 'How to Use',
          content:
            'Use to hand-sew hems or close lining seams. Pick up a small amount of fabric from the fold and then a tiny bit of the garment, alternating sides.',
        },
      ],
    },
    {
      id: 'overcast-stitch',
      title: 'Overcast Stitch',
      content:
        'A stitch that wraps over the raw edge of fabric to prevent fraying.',
      subsections: [
        {
          id: 'overcast-stitch-usage',
          title: 'How to Use',
          content:
            'Stitch along the raw edge, looping the thread over the edge. Useful for lightweight fabrics and finishing seams.',
        },
      ],
    },
    {
      id: 'blanket-stitch',
      title: 'Blanket Stitch',
      content:
        'Decorative stitch often used on the edges of blankets or appliqué work, creating a series of loops along the edge.',
      subsections: [
        {
          id: 'blanket-stitch-usage',
          title: 'How to Use',
          content:
            'Use along edges of fabric to secure layers or add decorative trim. Keep stitches evenly spaced for neat appearance.',
        },
      ],
    },
  ];

  return (
    <PageWrapper title="Hand Stitches">
      <WikiPage title="Hand Stitches" sections={handStitchSections} />
    </PageWrapper>
  );
}
