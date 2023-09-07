import './Filter.css';
import white from '../assets/W.svg';
import blue from '../assets/U.svg';
import black from '../assets/B.svg';
import red from '../assets/R.svg';
import green from '../assets/G.svg';
import colorless from '../assets/C.svg';
import zero from '../assets/0.svg';
import one from '../assets/1.svg';
import two from '../assets/2.svg';
import three from '../assets/3.svg';
import four from '../assets/4.svg';
import five from '../assets/5.svg';
import six from '../assets/6.svg';
import seven from '../assets/7.svg';
import creature from '../assets/creature.svg';
import planeswalker from '../assets/planeswalker.svg';
import instant from '../assets/instant.svg';
import sorcery from '../assets/sorcery.svg';
import enchantment from '../assets/enchantment.svg';
import artifact from '../assets/artifact.svg';
import land from '../assets/land.svg';

export default function Filter({
  color,
  setColor,
  manaValue,
  setManaValue,
  type,
  setType,
  rarity,
  setRarity,
  query,
  setQuery,
}) {
  function handleChange(e) {
    setQuery(e.target.value);
  }

  function filterColor(string) {
    if (string === color) setColor(null);
    else setColor(string);
  }

  function filterManaValue(number) {
    if (number === manaValue) setManaValue(null);
    else setManaValue(number);
  }

  function filterType(string) {
    if (string === type) setType(null);
    else setType(string);
  }

  function filterRarity(string) {
    if (string === rarity) setRarity(null);
    else setRarity(string);
  }
  
  function resetFilter() {
    setColor(null);
    setManaValue(null);
    setType(null);
    setRarity(null);
    setQuery('');
  }
  
  return (
    <div className="filter-container">
      <div className="search-container">
        <label htmlFor="search-bar" hidden>
          Search Bar
        </label>
        <input id="search-bar" value={query} onChange={handleChange} />
        <button className="reset" onClick={resetFilter}>RESET FILTERS</button>
      </div>
      <div className="filters">
        <div className="symbol-container">
          COLOR
          <div className="colors">
            <button onClick={() => filterColor('W')}>
              <img className="symbol" src={white} alt="white mana symbol" />
            </button>
            <button onClick={() => filterColor('U')}>
              <img className="symbol" src={blue} alt="blue mana symbol" />
            </button>
            <button onClick={() => filterColor('B')}>
              <img className="symbol" src={black} alt="black mana symbol" />
            </button>
            <button onClick={() => filterColor('R')}>
              <img className="symbol" src={red} alt="red mana symbol" />
            </button>
            <button onClick={() => filterColor('G')}>
              <img className="symbol" src={green} alt="green mana symbol" />
            </button>
            <button onClick={() => filterColor('C')}>
              <img
                className="symbol"
                src={colorless}
                alt="colorless mana symbol"
              />
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="symbol-container">
          MANA VALUE
          <div className="mana-values">
            <button onClick={() => filterManaValue(0)}>
              <img className="symbol" src={zero} alt="zero mana cost" />
            </button>
            <button onClick={() => filterManaValue(1)}>
              <img className="symbol" src={one} alt="one mana cost" />
            </button>
            <button onClick={() => filterManaValue(2)}>
              <img className="symbol" src={two} alt="two mana cost" />
            </button>
            <button onClick={() => filterManaValue(3)}>
              <img className="symbol" src={three} alt="three mana cost" />
            </button>
            <button onClick={() => filterManaValue(4)}>
              <img className="symbol" src={four} alt="four mana cost" />
            </button>
            <button onClick={() => filterManaValue(5)}>
              <img className="symbol" src={five} alt="five mana cost" />
            </button>
            <button onClick={() => filterManaValue(6)}>
              <img className="symbol" src={six} alt="six mana cost" />
            </button>
            <button onClick={() => filterManaValue(7)}>
              <img className="symbol" src={seven} alt="seven mana cost" />
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="symbol-container">
          CARD TYPE
          <div className="types">
            <button onClick={() => filterType('Planeswalker')}>
              <img
                className="planeswalker-symbol"
                src={planeswalker}
                alt="planeswalker symbol"
              />
            </button>
            <button onClick={() => filterType('Creature')}>
              <img className="symbol" src={creature} alt="creature symbol" />
            </button>
            <button onClick={() => filterType('Instant')}>
              <img className="symbol" src={instant} alt="instant symbol" />
            </button>
            <button onClick={() => filterType('Sorcery')}>
              <img className="symbol" src={sorcery} alt="sorcery symbol" />
            </button>
            <button onClick={() => filterType('Enchantment')}>
              <img
                className="symbol"
                src={enchantment}
                alt="enchantment symbol"
              />
            </button>
            <button onClick={() => filterType('Artifact')}>
              <img className="symbol" src={artifact} alt="artifact symbol" />
            </button>
            <button onClick={() => filterType('Land')}>
              <img className="symbol" src={land} alt="land symbol" />
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="symbol-container">
          RARITY
          <div className="rarities">
            <button
              className="mythic rarity"
              onClick={() => filterRarity('mythic')}
            ></button>
            <button
              className="rare rarity"
              onClick={() => filterRarity('rare')}
            ></button>
            <button
              className="uncommon rarity"
              onClick={() => filterRarity('uncommon')}
            ></button>
            <button
              className="common rarity"
              onClick={() => filterRarity('common')}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
