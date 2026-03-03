import PageWrapper from '../../components/PageWrapper';
import WikiPage from '../../components/WikiPage';
import { WikiSection } from '../../types';

export default function Sleeves() {
  const sleeveSections: WikiSection[] = [
    {
      id: 'cap-sleeve',
      title: 'Cap Sleeve',
      content:
        'A short sleeve that barely covers the shoulder, often used in blouses and dresses for a feminine touch.',
    },
    {
      id: 'set-in-sleeve',
      title: 'Set-In Sleeve',
      content:
        'A sleeve sewn into the armhole with a seam that encircles the shoulder, common in tailored garments.',
    },
    {
      id: 'raglan-sleeve',
      title: 'Raglan Sleeve',
      content:
        'Sleeve extends in one piece fully to the collar, giving a diagonal seam from underarm to neckline, often used in sportswear.',
    },
    {
      id: 'kimono-sleeve',
      title: 'Kimono Sleeve',
      content:
        'A sleeve cut as part of the bodice with no shoulder seam, typically wide and flowing.',
    },
    {
      id: 'bishop-sleeve',
      title: 'Bishop Sleeve',
      content:
        'A long sleeve that is fuller at the bottom and gathered into a cuff, creating a soft, billowy effect.',
    },
    {
      id: 'bell-sleeve',
      title: 'Bell Sleeve',
      content:
        'Sleeve that flares from the shoulder or elbow into a bell shape, often used for decorative or dramatic effects.',
    },
    {
      id: 'puff-sleeve',
      title: 'Puff Sleeve',
      content:
        'Sleeve gathered at the shoulder and sometimes at the hem to create a puffy silhouette, often seen in vintage or romantic styles.',
    },
    {
      id: 'flutter-sleeve',
      title: 'Flutter Sleeve',
      content:
        'Short, loose sleeve that drapes softly over the shoulder, giving a fluttering appearance.',
    },
    {
      id: 'long-sleeve',
      title: 'Long Sleeve',
      content:
        'A sleeve that extends to the wrist, used in shirts, dresses, and outerwear.',
    },
    {
      id: 'three-quarter-sleeve',
      title: 'Three-Quarter Sleeve',
      content:
        'Sleeve that ends midway between the elbow and wrist, providing a balanced look and comfort.',
    },
  ];

  return (
    <PageWrapper title="Sleeves">
      <WikiPage title="Sleeves" sections={sleeveSections} />
    </PageWrapper>
  );
}
