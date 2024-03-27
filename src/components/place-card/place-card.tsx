import { Link } from 'react-router-dom';
import { PictureSize, AllPictureSizes, AppRoute } from '../../const';
import { getRating } from '../../utils';

type OfferProps = {
  previewImage: string;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  price: number;
  title: string;
  type: string;
  id: string;
}

type PlaceCardProps = {
  offer: OfferProps;
  setCurrentId(id: string | null): void;
  typeOfCard: string;
}

type CheckPremiumProps = {
  isPremium: boolean;
}

type CheckBookmarkProps = {
  isFavorite: boolean;
}

function CheckPremium({ isPremium }: CheckPremiumProps) {
  if (isPremium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
  return '';
}

function CheckBookmark({ isFavorite }: CheckBookmarkProps) {
  if (isFavorite) {
    return (
      <button
        className="place-card__bookmark-button place-card__bookmark-button--active button"
        type="button"
      >
        <svg
          className="place-card__bookmark-icon"
          width={18}
          height={19}
        >
          <use xlinkHref="#icon-bookmark" />
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
    );
  }

  return (
    <button
      className="place-card__bookmark-button button"
      type="button"
    >
      <svg
        className="place-card__bookmark-icon"
        width={18}
        height={19}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default function PlaceCard({ offer, setCurrentId, typeOfCard }: PlaceCardProps): JSX.Element {
  const { previewImage, rating, isPremium, isFavorite, price, title, type, id } = offer;

  const mouseOverHandler = () => {
    setCurrentId(id);
  };

  const mouseOutHandler = () => {
    setCurrentId(null);
  };

  const pictureSize: PictureSize = AllPictureSizes[typeOfCard];

  return (
    <Link to={`${AppRoute.Offer.replace(':id', id)}`}>
      <article
        className={`${typeOfCard }__card place-card`}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        <CheckPremium isPremium={isPremium} />
        <div className={`${typeOfCard }__image-wrapper place-card__image-wrapper`}>
          <a href="#">
            <img
              className="place-card__image"
              src={previewImage}
              width={pictureSize.width}
              height={pictureSize.height}
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <CheckBookmark isFavorite={isFavorite} />
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: getRating(rating) }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">
              {title}
            </a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
}

