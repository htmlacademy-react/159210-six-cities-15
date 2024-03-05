import { nanoid } from '@reduxjs/toolkit';

export const Cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export type PlaceProps = {
  isPremium: boolean;
  img: string;
  price: number;
  rating: number;
  type: string;
  name: string;
  isBookmarked: boolean;
  id: string;
}

export const PlacesInfo: PlaceProps[] = [
  {
    isPremium: true,
    img: 'apartment-01',
    price: 120,
    rating: 0.8,
    type: 'Apartment',
    name: 'Beautiful & luxurious apartment at great location',
    isBookmarked: false,
    id: nanoid()
  },
  {
    isPremium: false,
    img: 'apartment-02',
    price: 80,
    rating: 0.8,
    type: 'Room',
    name: 'Wood and stone place',
    isBookmarked: true,
    id: nanoid()
  },
  {
    isPremium: false,
    img: 'apartment-03',
    price: 132,
    rating: 0.8,
    type: 'Apartment',
    name: 'Canal View Prinsengracht',
    isBookmarked: false,
    id: nanoid()
  },
  {
    isPremium: true,
    img: 'apartment-04',
    price: 180,
    rating: 1,
    type: 'Apartment',
    name: 'Nice, cozy, warm big bed apartment',
    isBookmarked: false,
    id: nanoid()
  },
  {
    isPremium: false,
    img: 'apartment-02',
    price: 80,
    rating: 0.8,
    type: 'Room',
    name: 'Wood and stone place',
    isBookmarked: true,
    id: nanoid()
  }
];
