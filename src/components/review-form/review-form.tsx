import React, { Fragment, ReactEventHandler } from 'react';
import { AuthorizationStatus } from '../../const.ts';

type ReviewFormProps = {
  authorizationStatus: AuthorizationStatus.Auth | AuthorizationStatus.NoAuth;
}

type fieldChangeHandlerType = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

const reviewRating = [
  { value: '5', title: 'perfect' },
  { value: '4', title: 'good' },
  { value: '3', title: 'not bad' },
  { value: '2', title: 'badly' },
  { value: '1', title: 'terribly' },
];

export default function ReviewForm({ authorizationStatus }: ReviewFormProps): JSX.Element {
  const [reviewDetails, setReviewDetails] = React.useState({
    review: '',
    rating: 0
  });

  const isValid =
    reviewDetails.review.length < 50 ||
    reviewDetails.rating === 0;

  const fieldChangeHandler: fieldChangeHandlerType = (evt) => {
    const target = evt.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;

    setReviewDetails({
      ...reviewDetails,
      [name]: value
    });
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <>
      </>
    );
  }
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          reviewRating.map(({ value, title }) => (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={value}
                id={`${value}-stars`}
                type="radio"
                onChange={fieldChangeHandler}
              />
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChangeHandler}
        value={reviewDetails.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
