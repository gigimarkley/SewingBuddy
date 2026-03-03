import PageWrapper from '../../components/PageWrapper';
import WikiPage from '../../components/WikiPage';
import { WikiSection } from '../../types';

export default function Dresses() {
  const dressSections: WikiSection[] = [
    {
      id: 'a-line',
      title: 'A-Line Dress',
      content:
        'A dress that is fitted at the top and gradually flares out toward the hem, creating an “A” shape. Flattering for most body types.',
    },
    {
      id: 'sheath',
      title: 'Sheath Dress',
      content:
        'A form-fitting dress that follows the natural lines of the body, typically knee-length. Ideal for professional or formal wear.',
    },
    {
      id: 'wrap-dress',
      title: 'Wrap Dress',
      content:
        'A dress that wraps around the body and ties at the side, creating a flattering silhouette and adjustable fit.',
    },
    {
      id: 'shift',
      title: 'Shift Dress',
      content:
        'A straight, loose-fitting dress that hangs from the shoulders, often sleeveless or short-sleeved. Comfortable and casual.',
    },
    {
      id: 'maxi',
      title: 'Maxi Dress',
      content:
        'A long dress that reaches the ankles or floor, usually flowing and comfortable. Can be casual or formal.',
    },
    {
      id: 'mini',
      title: 'Mini Dress',
      content:
        'A short dress that ends above the knee. Often casual or party wear.',
    },
    {
      id: 'midi',
      title: 'Midi Dress',
      content:
        'A dress with a hemline that falls between the knee and ankle. Suitable for casual or semi-formal occasions.',
    },
    {
      id: 'fit-and-flare',
      title: 'Fit-and-Flare Dress',
      content:
        'A dress fitted at the waist and flares out at the skirt, creating a feminine silhouette.',
    },
    {
      id: 'bodycon',
      title: 'Bodycon Dress',
      content:
        'A tight-fitting dress that hugs the body, often made with stretchy fabrics.',
    },
    {
      id: 'shirt-dress',
      title: 'Shirt Dress',
      content:
        'A dress inspired by a shirt design, with a collar, buttons, and sometimes a belt. Casual to semi-formal wear.',
    },
  ];

  return (
    <PageWrapper title="Dresses">
      <WikiPage title="Dress Styles" sections={dressSections} />
    </PageWrapper>
  );
}
