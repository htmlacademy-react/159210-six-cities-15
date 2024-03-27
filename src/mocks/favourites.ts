import { nanoid } from '@reduxjs/toolkit';

type FavoritesMocks = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export const Favorites: FavoritesMocks[] = [
  {
    id: nanoid(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-small-03.jpg'
  },
  {
    id: nanoid(),
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    city: {
      name: 'Amsterdam',
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room-small.jpg'
  },
  {
    id: nanoid(),
    title: 'White castle',
    type: 'Apartment',
    price: 180,
    city: {
      name: 'Cologne',
    },
    isFavorite: true,
    isPremium: false,
    rating: 5,
    previewImage: 'img/apartment-small-04.jpg'
  }
];
