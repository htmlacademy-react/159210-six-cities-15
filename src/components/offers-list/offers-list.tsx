import { OfferData } from '../../const';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: OfferData[];
  setCurrentId(id: string | null): void;
  typeOfCard: string;
}

export default function OffersList({ offers, setCurrentId, typeOfCard }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
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
