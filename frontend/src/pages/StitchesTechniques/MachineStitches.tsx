import PageWrapper from '../../components/PageWrapper';
import WikiPage from '../../components/WikiPage';
import { WikiSection } from '../../types';

export default function MachineStitches() {
  const stitchSections: WikiSection[] = [
    {
      id: 'straight-stitch',
      title: 'Straight Stitch',
      content:
        'A basic stitch that runs in a straight line. Ideal for seams, topstitching, and basting.',
      subsections: [
        {
          id: 'straight-stitch-usage',
          title: 'How to Use',
          content:
            'Use for general sewing, seams, and when a durable stitch is needed. Adjust stitch length according to fabric thickness.',
        },
      ],
    },
    {
      id: 'zigzag-stitch',
      title: 'Zigzag Stitch',
      content:
        'A stitch that moves side-to-side, useful for stretch fabrics and finishing raw edges.',
      subsections: [
        {
          id: 'zigzag-stitch-usage',
          title: 'How to Use',
          content:
            'Use for preventing fraying, sewing elastic, or decorative finishes. Adjust stitch width and length as needed.',
        },
      ],
    },
    {
      id: 'overlock-stitch',
      title: 'Overlock / Serger Stitch',
      content:
        'Finishes fabric edges by wrapping thread around the edge. Commonly done with a serger machine.',
      subsections: [
        {
          id: 'overlock-stitch-usage',
          title: 'How to Use',
          content:
            'Use to finish seams or raw edges quickly. Ideal for knit fabrics and professional-looking hems.',
        },
      ],
    },
    {
      id: 'decorative-stitch',
      title: 'Decorative Stitch',
      content:
        'Various stitches used for embellishment and design rather than construction.',
      subsections: [
        {
          id: 'decorative-stitch-usage',
          title: 'How to Use',
          content:
            'Select stitch type on your machine, adjust length and width, and sew on prepared fabric. Often used for hems, appliqué, or quilting.',
        },
      ],
    },
  ];

  return (
    <PageWrapper title="Machine Stitches">
      <WikiPage title="Machine Stitches" sections={stitchSections} />
    </PageWrapper>
  );
}
