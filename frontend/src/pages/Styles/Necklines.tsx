import PageWrapper from '../../components/PageWrapper';
import WikiPage from '../../components/WikiPage';
import { WikiSection } from '../../types';

export default function Necklines() {
  const necklineSections: WikiSection[] = [
    {
      id: 'crew-neck',
      title: 'Crew Neck',
      content:
        'A rounded neckline that sits close to the base of the neck. Common in t-shirts and casual tops.',
    },
    {
      id: 'v-neck',
      title: 'V-Neck',
      content:
        'A neckline that dips down in a V-shape at the front. Adds elongation to the neck and torso.',
    },
    {
      id: 'boat-neck',
      title: 'Boat Neck',
      content:
        'A wide, shallow neckline that runs horizontally across the collarbone, giving a classic look.',
    },
    {
      id: 'scoop-neck',
      title: 'Scoop Neck',
      content:
        'A deep, rounded neckline that creates a flattering curved shape.',
    },
    {
      id: 'square-neck',
      title: 'Square Neck',
      content:
        'A straight-edged neckline that forms a square shape, often used in dresses and tops for a vintage look.',
    },
    {
      id: 'halter-neck',
      title: 'Halter Neck',
      content:
        'A neckline where the straps tie or connect behind the neck, leaving the shoulders mostly bare.',
    },
    {
      id: 'cowl-neck',
      title: 'Cowl Neck',
      content:
        'A draped, loose neckline that folds softly around the collarbone for a relaxed and elegant look.',
    },
    {
      id: 'sweetheart-neck',
      title: 'Sweetheart Neck',
      content:
        'Shaped like the top of a heart, typically accentuating the bust and creating a romantic silhouette.',
    },
    {
      id: 'off-shoulder',
      title: 'Off-Shoulder',
      content:
        'A neckline that sits below the shoulders, exposing them entirely, often with elastic or fitted bands.',
    },
    {
      id: 'keyhole-neck',
      title: 'Keyhole Neck',
      content:
        'A neckline with a small teardrop or round cutout near the collarbone, sometimes fastened with a button or tie.',
    },
    {
      id: 'high-neck',
      title: 'High Neck',
      content:
        'A neckline that rises close to the base of the neck, often giving a modest and elegant appearance.',
    },
    {
      id: 'mock-neck',
      title: 'Mock Neck',
      content:
        'Similar to a turtleneck but shorter, providing coverage at the base of the neck without folding over.',
    },
  ];

  return (
    <PageWrapper title="Necklines">
      <WikiPage title="Necklines" sections={necklineSections} />
    </PageWrapper>
  );
}
