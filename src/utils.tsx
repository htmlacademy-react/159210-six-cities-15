import { RATING_COEFFICIENT } from './const';

export function getRating(rating: number): string {
  return `${rating * RATING_COEFFICIENT}%`;
}
