import Header from '../../components/header/header.tsx';
import { AuthorizationStatus, DetailedOffer, ReviewEntry, MapTypes, TypeOfCard } from '../../const.ts';
import ReviewForm from '../../components/review-form/review-form.tsx';
import { useParams } from 'react-router-dom';
import { DETAILED_OFFERS } from '../../mocks/offers.ts';
import { getRating } from '../../utils.tsx';
import ReviewsList from '../../components/reviews-list/reviews-list.tsx';
import Map from '../../components/map/map.tsx';
import OffersList from '../../components/offers-list/offers-list.tsx';
import { useState } from 'react';

type OfferPageProps = {
  authorizationStatus: AuthorizationStatus.Auth | AuthorizationStatus.NoAuth;
  reviews: ReviewEntry[];
  offers: DetailedOffer[];
}

type IsFavoriteProps = {
  isFavorite: boolean;
}

type HostNameProps = {
  hostName: string;
}

type ImagesListProps = {
  images: string[];
}

type GoodsListProps = {
  goods: string[];
}

function ImagesList({images}: ImagesListProps) {
  return images.map((image) => (
    <div className="offer__image-wrapper" key={image}>
      <img className="offer__image"
        src={image}
        alt="Photo studio"
      />
    </div>
  ));
}

function IsFavorite({isFavorite}: IsFavoriteProps) {
  return (
    <button className={`offer__bookmark-button ${isFavorite === true ? 'offer__bookmark-button--active' : ''} button`} type="button">
      <svg className="offer__bookmark-icon" width={31} height={33}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button >
  );
}

function GoodsList({ goods }: GoodsListProps) {
  return goods.map((good) => (
    <li className="offer__inside-item" key={good}>{good}</li>
  ));
}

function HostName({hostName}: HostNameProps) {
  const hostNameArray = hostName.split(' ');
  return (
    <>
      <span className="offer__user-name">{hostNameArray[0]}</span>
      <span className="offer__user-status">{hostNameArray[1]}</span>
    </>
  );
}

export default function OfferPage({ authorizationStatus, reviews, offers }: OfferPageProps): JSX.Element {
  const [currentId, setCurrentId] = useState<string | null>(null);
  const {id} = useParams();
  const currentOffer = DETAILED_OFFERS.filter((offer) => offer.id === id)[0];
  const placesNearby = offers.filter((offer) => offer.id !== id);


  const city = {
    title: currentOffer.city.name,
    lat: currentOffer.city.location.latitude,
    lng: currentOffer.city.location.longitude,
    zoom: currentOffer.city.location.zoom
  };

  return (
    <div className="page">
      <Header authorizationStatus={authorizationStatus} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <ImagesList images={currentOffer.images} />
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <IsFavorite isFavorite={currentOffer.isFavorite} />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getRating(currentOffer.rating) }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{currentOffer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <GoodsList goods={currentOffer.goods} />
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={currentOffer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <HostName hostName={currentOffer.host.name} />
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">1</span>
                </h2>
                <ReviewsList reviews={reviews} />
                <ReviewForm authorizationStatus={authorizationStatus} />
              </section>
            </div>
          </div>
          <Map currentId={currentId} offers={placesNearby} city={city} mapType={MapTypes.Offer} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList offers={placesNearby} setCurrentId={setCurrentId} typeOfCard={TypeOfCard.NearPlaces} />
          </section>
        </div>
      </main>
    </div>


  );
}

