import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { DETAILED_OFFERS } from './mocks/offers';
import { SETTINGS } from './const';
import { REVIEWS_DATA } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers = {DETAILED_OFFERS} placesAmount={SETTINGS.PlacesAmount} reviews={REVIEWS_DATA}/>
  </React.StrictMode>
);
