import { PlaceProps } from '../../const.ts';

type CheckPremiumProps = {
  isPremium: boolean;
}

type CheckBookmarkProps = {
  isBookmarked: boolean;
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

function CheckBookmark({ isBookmarked }: CheckBookmarkProps) {
  if (isBookmarked) {
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

export default function PlaceCard({ img, rating, isPremium, isBookmarked, price, name, type }: PlaceProps): JSX.Element {
  const imgSrc = `img/${img}.jpg`;
  const ratingPercents = `${rating * 100}%`;
  return (
    <article className="cities__card place-card">
      <CheckPremium isPremium={isPremium} />
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={imgSrc}
            width={260}
            height={200}
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
          <CheckBookmark isBookmarked={isBookmarked} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingPercents }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {name}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

