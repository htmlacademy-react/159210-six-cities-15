import { DETAILED_OFFERS } from './mocks/offers';

export const AllCities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Any = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  name: string;
  location: Location;
}

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type FavoritesData = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export enum TypeOfCard {
  Cities = 'cities',
  Favorites = 'favorites',
  NearPlaces = 'near-places'
}

export type PictureSize = {
  width: string;
  height: string;
}

type PictureSizes = {
  [key: string]: PictureSize;
}

export const AllPictureSizes: PictureSizes = {
  cities: {
    width: '260',
    height: '200'
  },
  favorites: {
    width: '150',
    height: '110'
  }
};

export type DetailedOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}

export const RATING_COEFFICIENT = 20;

export type ReviewEntry = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export const URL_MARKER_DEFAULT = './public/img/pin.svg';

export const URL_MARKER_CURRENT = './public/img/pin-active.svg';

export type CityMap = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
}

export const SETTINGS = {
  PlacesAmount: DETAILED_OFFERS.length,
} as const;


export const TYLE_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const TYLE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
