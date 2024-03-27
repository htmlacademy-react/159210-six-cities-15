import Header from '../../components/header/header';
import { Favorites } from '../../mocks/favourites';
import PlaceCard from '../../components/place-card/place-card';
import { useState } from 'react';
import { TypeOfCard, AuthorizationStatus } from '../../const';

type FavoritesPageProps = {
  authorizationStatus: AuthorizationStatus.Auth | AuthorizationStatus.NoAuth;
}

export default function FavoritesPage({ authorizationStatus }: FavoritesPageProps): JSX.Element {
  const [, setCurrentId] = useState<string | null>(null);
  const typeOfCard = TypeOfCard.Favorites;

  return (
    <div className="page">
      <Header authorizationStatus={authorizationStatus} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    Favorites
                      .filter(({ city }) => city.name === 'Amsterdam')
                      .map((offer) =>
                        (
                          <PlaceCard
                            offer={offer}
                            key={offer.id}
                            setCurrentId={setCurrentId}
                            typeOfCard={typeOfCard}
                          />
                        )
                      )
                  }
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    Favorites
                      .filter(({ city }) => city.name === 'Cologne')
                      .map((offer) =>
                        (
                          <PlaceCard
                            offer={offer}
                            key={offer.id}
                            setCurrentId={setCurrentId}
                            typeOfCard={typeOfCard}
                          />
                        )
                      )
                  }
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>

  );
}

