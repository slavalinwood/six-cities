import { CITIES } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { fillPlacesList, setCity } from '../../store/action';

function CityTabs(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city.name}>
              <a className={`locations__item-link tabs__item ${(city.name === currentCity.name) ? 'tabs__item--active' : ''}`}
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(setCity(city));
                  dispatch(fillPlacesList(city.name));
                }}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
