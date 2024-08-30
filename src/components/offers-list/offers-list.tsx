import { DetailedOffer, TypeOfCard } from '../../const';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: DetailedOffer[];
  setCurrentId(id: string | null): void;
  typeOfCard: string;
}

export default function OffersList({ offers, setCurrentId, typeOfCard }: OffersListProps): JSX.Element {
  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
      className={`places__list ${typeOfCard === TypeOfCard.Cities ?
        'cities__places-list tabs__content' :
        'near-places__list'}`}
    >
      {offers.map((offer) =>
        (
          <PlaceCard
            offer = {offer}
            key = {offer.id}
            setCurrentId={setCurrentId}
            typeOfCard={typeOfCard}
          />
        )
      )}
    </div>
  );
}
