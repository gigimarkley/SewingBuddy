import PageWrapper from '../../components/PageWrapper';
import WikiPage from '../../components/WikiPage';
import { WikiSection } from '../../types';

export default function Pants() {
  const pantsSections: WikiSection[] = [
    {
      id: 'trousers',
      title: 'Trousers',
      content:
        'Classic tailored pants, usually with a straight or slightly tapered leg, suitable for formal or office wear.',
    },
    {
      id: 'jeans',
      title: 'Jeans',
      content:
        'Casual pants made from denim, available in various fits such as skinny, straight, bootcut, or relaxed.',
    },
    {
      id: 'chinos',
      title: 'Chinos',
      content:
        'Lightweight cotton pants, typically casual or smart-casual, often in khaki or neutral colors.',
    },
    {
      id: 'leggings',
      title: 'Leggings',
      content:
        'Tight-fitting stretch pants, often made of knit fabrics, worn for casual, athletic, or layering purposes.',
    },
    {
      id: 'palazzo',
      title: 'Palazzo Pants',
      content:
        'Wide-legged, flowy pants that flare from the waist, giving a dramatic, elegant silhouette.',
    },
    {
      id: 'cargo-pants',
      title: 'Cargo Pants',
      content:
        'Casual, loose-fitting pants with multiple large pockets, often used for outdoor or utility purposes.',
    },
    {
      id: 'joggers',
      title: 'Joggers',
      content:
        'Relaxed-fit pants with elasticized waistband and cuffs, designed for comfort and casual wear.',
    },
    {
      id: 'culottes',
      title: 'Culottes',
      content:
        'Wide-legged pants that resemble a skirt, typically cropped mid-calf, popular for modern, stylish looks.',
    },
    {
      id: 'capris',
      title: 'Capri Pants',
      content:
        'Shorter pants that end below the knee or mid-calf, ideal for warm weather or casual wear.',
    },
    {
      id: 'flare-pants',
      title: 'Flare Pants',
      content:
        'Pants fitted through the hips and thighs, flaring out from the knee downward, giving a retro silhouette.',
    },
    // Short styles
    {
      id: 'shorts',
      title: 'Shorts',
      content:
        'Casual short pants ending above the knee, suitable for warm weather and leisure activities.',
    },
    {
      id: 'bermuda-shorts',
      title: 'Bermuda Shorts',
      content:
        'Longer shorts, typically ending just above the knee, versatile for casual or semi-formal wear.',
    },
    {
      id: 'athletic-shorts',
      title: 'Athletic Shorts',
      content:
        'Shorts made from breathable, stretchable fabrics designed for sports, workouts, or outdoor activities.',
    },
    {
      id: 'cycling-shorts',
      title: 'Cycling Shorts',
      content:
        'Tight-fitting shorts made for cycling, often padded and made from moisture-wicking materials.',
    },
  ];

  return (
    <PageWrapper title="Pants & Shorts">
      <WikiPage title="Pants & Shorts" sections={pantsSections} />
    </PageWrapper>
  );
}
