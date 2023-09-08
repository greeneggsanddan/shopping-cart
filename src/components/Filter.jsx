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
import { symbol } from 'prop-types';

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
    const symbols = document.querySelectorAll('.mana-color');
    const selected = document.getElementById(string);

    symbols.forEach((symbol) => symbol.classList.remove('selected'));

    if (string === color) {
      setColor(null);
    } else {
      selected.classList.add('selected');
      setColor(string);
    }
  }

  function filterManaValue(number) {
    const symbols = document.querySelectorAll('.mana-cost');
    const selected = document.getElementById(numberToWords(number));

    symbols.forEach((symbol) => symbol.classList.remove('selected'));

    if (number === manaValue) {
      setManaValue(null);
    } else {
      selected.classList.add('selected');
      setManaValue(number);
    }
  }

  function filterType(string) {
    const symbols = document.querySelectorAll('.card-type');
    const selected = document.getElementById(string);

    symbols.forEach((symbol) => symbol.classList.remove('selected'));

    if (string === type) {
      setType(null);
    } else {
      selected.classList.add('selected');
      setType(string);
    }
  }

  function filterRarity(string) {
    const symbols = document.querySelectorAll('.rarity-container');
    const selected = document.getElementById(string);

    symbols.forEach((symbol) => symbol.classList.remove('selected'));

    if (string === rarity) {
      setRarity(null);
    } else {
      selected.classList.add('selected');
      setRarity(string);
    }
  }

  function resetFilter() {
    const selected = document.querySelectorAll('.selected');
    selected.forEach((symbol) => symbol.classList.remove('selected'));

    setColor(null);
    setManaValue(null);
    setType(null);
    setRarity(null);
    setQuery('');
  }

  function numberToWords(number) {
    const words = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
    ];
    return words[number];
  }

  return (
    <div className="filter-container">
      <div className="search-container">
        <label htmlFor="search-bar" hidden>
          Search Bar
        </label>
        <input id="search-bar" value={query} onChange={handleChange} />
        <button className="reset" onClick={resetFilter}>
          RESET FILTERS
        </button>
      </div>
      <div className="filters">
        <div className="symbol-container">
          COLOR
          <div className="colors">
            <button onClick={() => filterColor('W')}>
              <img
                id="W"
                className="mana-color symbol"
                src={white}
                alt="white mana symbol"
              />
            </button>
            <button onClick={() => filterColor('U')}>
              <img
                id="U"
                className="mana-color symbol"
                src={blue}
                alt="blue mana symbol"
              />
            </button>
            <button onClick={() => filterColor('B')}>
              <img
                id="B"
                className="mana-color symbol"
                src={black}
                alt="black mana symbol"
              />
            </button>
            <button onClick={() => filterColor('R')}>
              <img
                id="R"
                className="mana-color symbol"
                src={red}
                alt="red mana symbol"
              />
            </button>
            <button onClick={() => filterColor('G')}>
              <img
                id="G"
                className="mana-color symbol"
                src={green}
                alt="green mana symbol"
              />
            </button>
            <button onClick={() => filterColor('C')}>
              <img
                id="C"
                className="mana-color symbol"
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
              <img
                id="zero"
                className="mana-cost symbol"
                src={zero}
                alt="zero mana cost"
              />
            </button>
            <button onClick={() => filterManaValue(1)}>
              <img
                id="one"
                className="mana-cost symbol"
                src={one}
                alt="one mana cost"
              />
            </button>
            <button onClick={() => filterManaValue(2)}>
              <img
                id="two"
                className="mana-cost symbol"
                src={two}
                alt="two mana cost"
              />
            </button>
            <button onClick={() => filterManaValue(3)}>
              <img
                id="three"
                className="mana-cost symbol"
                src={three}
                alt="three mana cost"
              />
            </button>
            <button onClick={() => filterManaValue(4)}>
              <img
                id="four"
                className="mana-cost symbol"
                src={four}
                alt="four mana cost"
              />
            </button>
            <button onClick={() => filterManaValue(5)}>
              <img
                id="five"
                className="mana-cost symbol"
                src={five}
                alt="five mana cost"
              />
            </button>
            <button onClick={() => filterManaValue(6)}>
              <img
                id="six"
                className="mana-cost symbol"
                src={six}
                alt="six mana cost"
              />
            </button>
            <button onClick={() => filterManaValue(7)}>
              <img
                id="seven"
                className="mana-cost symbol"
                src={seven}
                alt="seven mana cost"
              />
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="symbol-container">
          CARD TYPE
          <div className="card-types">
            <button onClick={() => filterType('Planeswalker')}>
              <img
                id="Planeswalker"
                className="card-type symbol"
                src={planeswalker}
                alt="planeswalker symbol"
              />
            </button>
            <button onClick={() => filterType('Creature')}>
              <img
                id="Creature"
                className="card-type symbol"
                src={creature}
                alt="creature symbol"
              />
            </button>
            <button onClick={() => filterType('Instant')}>
              <img
                id="Instant"
                className="card-type symbol"
                src={instant}
                alt="instant symbol"
              />
            </button>
            <button onClick={() => filterType('Sorcery')}>
              <img
                id="Sorcery"
                className="card-type symbol"
                src={sorcery}
                alt="sorcery symbol"
              />
            </button>
            <button onClick={() => filterType('Enchantment')}>
              <img
                id="Enchantment"
                className="card-type symbol"
                src={enchantment}
                alt="enchantment symbol"
              />
            </button>
            <button onClick={() => filterType('Artifact')}>
              <img
                id="Artifact"
                className="card-type symbol"
                src={artifact}
                alt="artifact symbol"
              />
            </button>
            <button onClick={() => filterType('Land')}>
              <img
                id="Land"
                className="card-type symbol"
                src={land}
                alt="land symbol"
              />
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="symbol-container">
          RARITY
          <div className="rarities">
            <div id="mythic" className="rarity-container">
              <button
                className="mythic rarity"
                onClick={() => filterRarity('mythic')}
              ></button>
            </div>
            <div id="rare" className="rarity-container">
              <button
                className="rare rarity"
                onClick={() => filterRarity('rare')}
              ></button>
            </div>
            <div id="uncommon" className="rarity-container">
              <button
                className="uncommon rarity"
                onClick={() => filterRarity('uncommon')}
              ></button>
            </div>
            <div id="common" className="rarity-container">
              <button
                className="common rarity"
                onClick={() => filterRarity('common')}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
