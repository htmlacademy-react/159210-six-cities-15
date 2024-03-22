import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">404</b>
                <p className="cities__status-description">
                  Page is not found
                </p>
                <p className="cities__status-description">
                  <Link to="/"><u>Go to main page</u></Link>
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

