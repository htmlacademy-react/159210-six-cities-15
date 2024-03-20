import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main/main.tsx';
import LoginPage from '../../pages/login/login.tsx';
import FavoritesPage from '../../pages/favorites/favorites.tsx';
import OfferPage from '../../pages/offer/offer.tsx';
import NotFoundPage from '../../pages/404/404.tsx';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import PrivateRoute from '../private-route/private-route.tsx';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} >
            <FavoritesPage />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
