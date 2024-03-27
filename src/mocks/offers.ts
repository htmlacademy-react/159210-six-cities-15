import { DetailedOffer, OfferData } from '../const';

export const Offers: OfferData[] = [
  {
    'id': '414fd17d-c2ef-4324-8015-05445fe914e2',
    'title': 'House in countryside',
    'type': 'house',
    'price': 151,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1
  },
  {
    'id': '6cda5e1d-1c48-43d6-886b-4c8f4eecead5',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 405,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': '76964682-fb03-42c9-888d-b6b53256507e',
    'title': 'The house among olive',
    'type': 'room',
    'price': 286,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4
  },
  {
    'id': 'a0b8a2e8-91f3-4665-bb55-2e32efc4c647',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 241,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.7
  }
];

const Goods = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge'
];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getGoodsList() {
  const listLength = getRandomInt(Goods.length);
  const list: string[] = [];
  for (let i = 0; i < listLength; i++) {
    let newGood: string = Goods[getRandomInt(Goods.length)];
    while (list.includes(newGood)) {
      newGood = Goods[getRandomInt(Goods.length)];
    }
    list.push(newGood);
  }

  return list;
}

export const DetailedOffers: DetailedOffer[] = [
  {
    id: '414fd17d-c2ef-4324-8015-05445fe914e2',
    title: 'House in countryside',
    type: 'house',
    price: 151,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.1,
    description: 'A house in the countryside offers a serene and peaceful living environment, away from the hustle and bustle of urban life. Surrounded by nature, you can enjoy fresh air, beautiful landscapes, and a slower pace of life. This type of dwelling often allows for more privacy, space, and opportunities for outdoor activities, gardening, or even raising livestock. However, it may require additional considerations such as commuting distance to work or access to essential services. Overall, a house in the countryside can be an ideal choice for those seeking tranquility and a closer connection with nature.',
    bedrooms: 2,
    goods: getGoodsList(),
    host: {
      name: 'Eugene Duffy',
      avatarUrl: 'https://loremflickr.com/100/100',
      isPro: true,
    },
    images: ['https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200'],
    maxAdults: 2
  },
  {
    id: '6cda5e1d-1c48-43d6-886b-4c8f4eecead5',
    title: 'Wood and stone place',
    type: 'house',
    price: 405,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    description: 'A wooden and stone house combines the warmth and coziness of wood with the durability and elegance of stone, creating a harmonious and visually appealing living space. Wooden elements, such as flooring, walls, or furniture, can provide a sense of comfort and natural beauty, while stone features like walls, fireplaces, or countertops can add stability and a timeless aesthetic. These materials also offer excellent insulation and energy efficiency, contributing to a more sustainable and cost-effective home. Ultimately, a wood and stone house can be an inviting and environmentally friendly living option that enhances your quality of life.',
    bedrooms: 2,
    goods: getGoodsList(),
    host: {
      name: 'Alia Crosby',
      avatarUrl: 'https://loremflickr.com/100/100',
      isPro: false,
    },
    images: ['https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200'],
    maxAdults: 3
  },
  {
    id: '76964682-fb03-42c9-888d-b6b53256507e',
    title: 'The house among olive',
    type: 'room',
    price: 286,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    description: 'Living in a house surrounded by olive trees offers a unique and enchanting experience, providing a picturesque and serene environment. The lush greenery, calming rustle of leaves, and the occasional scent of olives create a soothing atmosphere. This setting allows for a harmonious connection with nature, as well as opportunities for outdoor activities such as gardening, walking, or simply enjoying the tranquility. Moreover, living near olive trees can offer practical benefits, as you may have access to fresh, organic olives and olive oil for your daily needs. In summary, a house among olive trees can be a delightful and rewarding living experience that combines beauty, relaxation, and potential self-sufficiency.',
    bedrooms: 2,
    goods: getGoodsList(),
    host: {
      name: 'Hashim Dennis',
      avatarUrl: 'https://loremflickr.com/100/100',
      isPro: false,
    },
    images: ['https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200'],
    maxAdults: 1
  },
  {
    id: 'a0b8a2e8-91f3-4665-bb55-2e32efc4c647',
    title: 'Tile House',
    type: 'hotel',
    price: 241,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.7,
    description: 'Tile House is a stunning example of modern architecture, combining sleek lines with warm and inviting elements to create a truly unique living space. The use of clean lines, geometric shapes, and the incorporation of natural materials such as wood and stone make the house feel both cutting-edge and timeless. The large windows allow for an abundance of natural light, creating an open and airy atmosphere throughout the home.',
    bedrooms: 18,
    goods: getGoodsList(),
    host: {
      name: 'Ishaan Gutierrez',
      avatarUrl: 'https://loremflickr.com/100/100',
      isPro: true,
    },
    images: ['https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200',
      'https://loremflickr.com/260/200'],
    maxAdults: 36
  },
];
