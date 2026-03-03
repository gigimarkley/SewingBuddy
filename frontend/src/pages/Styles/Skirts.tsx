import PageWrapper from '../../components/PageWrapper';
import WikiPage from '../../components/WikiPage';
import { WikiSection } from '../../types';

export default function Skirts() {
  const skirtSections: WikiSection[] = [
    {
      id: 'a-line',
      title: 'A-Line Skirt',
      content:
        'A skirt that is fitted at the waist and gradually widens towards the hem, creating an “A” shape. Suitable for most body types.',
    },
    {
      id: 'pencil',
      title: 'Pencil Skirt',
      content:
        'A slim, straight skirt that hugs the body and ends around the knee, commonly used for office or formal wear.',
    },
    {
      id: 'pleated',
      title: 'Pleated Skirt',
      content:
        'A skirt with folds (pleats) that add volume and movement. Pleats can be knife, box, or accordion style.',
    },
    {
      id: 'circle',
      title: 'Circle Skirt',
      content:
        'A full skirt cut in a circular pattern, giving a flared look. Can be knee-length or longer and creates a lot of movement.',
    },
    {
      id: 'wrap',
      title: 'Wrap Skirt',
      content:
        'A skirt that wraps around the waist and fastens with ties or buttons. Offers adjustable sizing and a casual look.',
    },
    {
      id: 'tiered',
      title: 'Tiered Skirt',
      content:
        'A skirt made with multiple horizontal layers (tiers), adding fullness and a playful appearance.',
    },
    {
      id: 'mini',
      title: 'Mini Skirt',
      content:
        'A short skirt ending above the knee. Popular for casual and youthful looks.',
    },
    {
      id: 'midi',
      title: 'Midi Skirt',
      content:
        'A skirt ending around mid-calf, offering a classic and versatile silhouette.',
    },
    {
      id: 'maxi',
      title: 'Maxi Skirt',
      content:
        'A long skirt that reaches the ankles or floor, often used for casual, formal, or bohemian styles.',
    },
    {
      id: 'gathered',
      title: 'Gathered Skirt',
      content:
        'A skirt with fabric gathered at the waist, creating fullness and volume while being comfortable to wear.',
    },
    {
      id: 'asymmetrical',
      title: 'Asymmetrical Skirt',
      content:
        'A skirt with an uneven hemline, adding a modern or edgy look to the garment.',
    },
  ];

  return (
    <PageWrapper title="Skirts">
      <WikiPage title="Skirt Styles" sections={skirtSections} />
    </PageWrapper>
  );
}
