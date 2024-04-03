import { nanoid } from '@reduxjs/toolkit';
import { ReviewEntry } from '../const';

export const REVIEWS_DATA: ReviewEntry[] = [
  {
    id: nanoid(),
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Linda Sampson',
      avatarUrl: 'https://loremflickr.com/100/100',
      isPro: true,
    },
    comment: 'The house was absolutely stunning! The interior design was modern and chic, and the views from the balcony were breathtaking. We had a wonderful stay and would definitely recommend this property to anyone looking for a luxurious getaway.',
    rating: 5
  },
  {
    id: nanoid(),
    date: '2019-03-18T14:13:56.569Z',
    user: {
      name: 'Terence Mercado',
      avatarUrl: 'https://loremflickr.com/100/100',
      isPro: false,
    },
    comment: 'We loved our stay at this charming house. The cozy atmosphere and beautiful garden made for a perfect weekend retreat. The location was convenient and the house had everything we needed for a comfortable stay. We will definitely be returning in the future.',
    rating: 4.3
  },
  {
    id: nanoid(),
    date: '2020-03-01T14:13:56.569Z',
    user: {
      name: 'Courtney Wagner',
      avatarUrl: 'https://loremflickr.com/100/100',
      isPro: true,
    },
    comment: 'This house exceeded all of our expectations. The spacious layout and well-appointed kitchen made it easy for us to entertain our friends and family. The outdoor space was perfect for enjoying the warm weather, and the neighborhood was quiet and peaceful. We can&grave;t wait to come back for another visit!',
    rating: 3.8
  }, {
    id: nanoid(),
    date: '2021-11-11T14:13:56.569Z',
    user: {
      name: 'Brandon Jordan',
      avatarUrl: 'https://loremflickr.com/100/100',
      isPro: false,
    },
    comment: 'Absolutely stunning house! The modern design and high-end finishes are breathtaking. The open floor plan allows for plenty of natural light and the outdoor living space is perfect for entertaining. Highly recommend!',
    rating: 4.5
  },
];
