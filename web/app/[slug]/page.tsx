import CafePage, { generateMetadata as generateCafeMetadata } from '../cafes/[slug]/page';
import { cafes } from '@/src/data/cafes';

export function generateStaticParams() {
  return cafes.map((cafe) => ({ slug: cafe.slug }));
}

export const generateMetadata = generateCafeMetadata;

export default CafePage;
