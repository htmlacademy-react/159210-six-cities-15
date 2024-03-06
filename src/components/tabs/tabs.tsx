type TabsProps = {
  cities: string[];
};

function GetTabs({cities}: TabsProps) {
  const citiesList = cities.map((city) =>
    // eslint-disable-next-line react/jsx-key, react/jsx-wrap-multilines
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
  return citiesList;
}

export default function Tabs({cities}: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <GetTabs cities={cities} />
        </ul>
      </section>
    </div>
  );
}
