import Map from '../../components/map/map.tsx';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list.tsx';
import Tabs from '../../components/tabs/tabs';
import { AllCities, AuthorizationStatus, DetailedOffer, TypeOfCard } from '../../const.ts';
import { useState } from 'react';
import { city } from '../../mocks/city.ts';

type MainPageProps = {
  offers: DetailedOffer[];
  authorizationStatus: AuthorizationStatus.Auth | AuthorizationStatus.NoAuth;
  placesAmount: number;
}

export default function MainPage({ offers, authorizationStatus, placesAmount }: MainPageProps): JSX.Element {
  const [currentId, setCurrentId] = useState<string | null>(null);
  const typeOfCard: string = TypeOfCard.Cities;

  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={AllCities} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesAmount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OffersList offers={offers} setCurrentId={setCurrentId} typeOfCard = {typeOfCard}/>
            </section>
            <div className="cities__right-section">
              <Map currentId={currentId} offers={offers} city={city} />
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

