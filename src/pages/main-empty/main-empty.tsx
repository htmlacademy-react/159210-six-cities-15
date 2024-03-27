import Header from '../../components/header/header.tsx';
import Tabs from '../../components/tabs/tabs.tsx';
import { AllCities, AuthorizationStatus } from '../../const.ts';

type MainEmptyPageProps = {
  authorizationStatus: AuthorizationStatus.Auth | AuthorizationStatus.NoAuth;
}

export default function MainEmptyPage({authorizationStatus}: MainEmptyPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus} />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={AllCities} />
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  We could not find any property available at the moment in
                  Dusseldorf
                </p>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </div>


  );
}

