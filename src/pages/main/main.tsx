import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list.tsx';
import Tabs from '../../components/tabs/tabs';
import { AllCities, AuthorizationStatus, OfferData, TypeOfCard } from '../../const.ts';
import { useState } from 'react';

type MainPageProps = {
  offers: OfferData[];
  authorizationStatus: AuthorizationStatus.Auth | AuthorizationStatus.NoAuth;
}

export default function MainPage({ offers, authorizationStatus }: MainPageProps): JSX.Element {
  const [сurrentId, setCurrentId] = useState<string | null>(null);
  const typeOfCard = TypeOfCard.Cities;

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
              <b className="places__found">312 places to stay in Amsterdam</b>
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
              <section className="cities__map map">{сurrentId}</section>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

