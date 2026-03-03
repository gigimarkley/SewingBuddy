import PageWrapper from '../../components/PageWrapper';
import WikiPage from '../../components/WikiPage';
import { WikiSection } from '../../types';

export default function TopsBlouses() {
  const topSections: WikiSection[] = [
    {
      id: 't-shirt',
      title: 'T-Shirt',
      content:
        'A casual, short-sleeved top, usually made of knit fabric. Versatile and comfortable for everyday wear.',
    },
    {
      id: 'blouse',
      title: 'Blouse',
      content:
        'A lightweight, often dressy top for women. Can feature buttons, pleats, ruffles, or decorative details.',
    },
    {
      id: 'tank-top',
      title: 'Tank Top',
      content:
        'A sleeveless top with wide or narrow straps, typically worn in warm weather or as a layering piece.',
    },
    {
      id: 'peplum-top',
      title: 'Peplum Top',
      content:
        'A fitted top with a flared ruffle or panel at the waist, creating a feminine silhouette.',
    },
    {
      id: 'wrap-top',
      title: 'Wrap Top',
      content:
        'A top that wraps around the body and ties at the side or front, allowing adjustable fit and flattering shape.',
    },
    {
      id: 'off-shoulder',
      title: 'Off-Shoulder Top',
      content:
        'A top that exposes the shoulders, often elasticized at the neckline for a secure fit.',
    },
    {
      id: 'crop-top',
      title: 'Crop Top',
      content:
        'A short top that ends above the waist or midriff. Can be casual or styled for dressy occasions.',
    },
    {
      id: 'button-up',
      title: 'Button-Up Shirt',
      content:
        'A tailored shirt with a collar and front buttons, suitable for formal, office, or professional wear.',
    },
    {
      id: 'tunic',
      title: 'Tunic',
      content:
        'A longer top, often loose-fitting, that can be worn over leggings, pants, or skirts.',
    },
    {
      id: 'hoodie',
      title: 'Hoodie',
      content:
        'A casual, comfortable top with a hood, often made of sweatshirt material.',
    },
  ];

  return (
    <PageWrapper title="Tops and Blouses">
      <WikiPage title="Top & Blouse Styles" sections={topSections} />
    </PageWrapper>
  );
}
