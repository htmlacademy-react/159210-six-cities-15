import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main/main.tsx';
import LoginPage from '../../pages/login/login.tsx';
import FavoritesPage from '../../pages/favorites/favorites.tsx';
import OfferPage from '../../pages/offer/offer.tsx';
import NotFoundPage from '../../pages/404/404.tsx';
import { AppRoute, AuthorizationStatus, DetailedOffer, ReviewEntry } from '../../const.ts';
import PrivateRoute from '../private-route/private-route.tsx';

type AppProps = {
  offers: DetailedOffer[];
  placesAmount: number;
  reviews: ReviewEntry[];
}

export default function App({ offers, placesAmount, reviews }: AppProps): JSX.Element {
  const currentStatus = AuthorizationStatus.Auth;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage offers={offers} authorizationStatus={currentStatus} placesAmount={placesAmount} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={currentStatus} >
            <FavoritesPage authorizationStatus={currentStatus} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<OfferPage authorizationStatus={currentStatus} reviews={reviews}/>} />
        <Route path={AppRoute.Any} element={<NotFoundPage authorizationStatus={currentStatus} />} />
      </Routes>
    </BrowserRouter>
  );
}
