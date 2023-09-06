import './Filter.css';
import white from '../assets/W.svg'
import blue from '../assets/U.svg'
import black from '../assets/B.svg'
import red from '../assets/R.svg'
import green from '../assets/G.svg'
import colorless from '../assets/C.svg'
import zero from '../assets/0.svg'
import one from '../assets/1.svg'
import two from '../assets/2.svg'
import three from '../assets/3.svg'
import four from '../assets/4.svg'
import five from '../assets/5.svg'
import six from '../assets/6.svg'
import seven from '../assets/7.svg'
import creature from '../assets/creature.svg'
import planeswalker from '../assets/planeswalker.svg'
import instant from '../assets/instant.svg'
import sorcery from '../assets/sorcery.svg'
import enchantment from '../assets/enchantment.svg'
import artifact from '../assets/artifact.svg'
import land from '../assets/land.svg'


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
  }

  return (
    <div className="filter">
      <label htmlFor="search-bar" hidden>
        Search Bar
      </label>
      <input id="search-bar" value={query} onChange={handleChange} />
      <div className="colors">
        <button onClick={() => filterColor('W')}>
          <img className="mana-symbol" src={white} alt="white mana symbol" />
        </button>
        <button onClick={() => filterColor('U')}>
          <img className="mana-symbol" src={blue} alt="blue mana symbol" />
        </button>
        <button onClick={() => filterColor('B')}>
          <img className="mana-symbol" src={black} alt="black mana symbol" />
        </button>
        <button onClick={() => filterColor('R')}>
          <img className="mana-symbol" src={red} alt="red mana symbol" />
        </button>
        <button onClick={() => filterColor('G')}>
          <img className="mana-symbol" src={green} alt="green mana symbol" />
        </button>
        <button onClick={() => filterColor('C')}>
          <img
            className="mana-symbol"
            src={colorless}
            alt="colorless mana symbol"
          />
        </button>
      </div>
      <div className="mana-values">
        <button onClick={() => filterManaValue(0)}>
          <img className="mana-symbol" src={zero} alt="zero mana cost" />
        </button>
        <button onClick={() => filterManaValue(1)}>
          <img className="mana-symbol" src={one} alt="one mana cost" />
        </button>
        <button onClick={() => filterManaValue(2)}>
          <img className="mana-symbol" src={two} alt="two mana cost" />
        </button>
        <button onClick={() => filterManaValue(3)}>
          <img className="mana-symbol" src={three} alt="three mana cost" />
        </button>
        <button onClick={() => filterManaValue(4)}>
          <img className="mana-symbol" src={four} alt="four mana cost" />
        </button>
        <button onClick={() => filterManaValue(5)}>
          <img className="mana-symbol" src={five} alt="five mana cost" />
        </button>
        <button onClick={() => filterManaValue(6)}>
          <img className="mana-symbol" src={six} alt="six mana cost" />
        </button>
        <button onClick={() => filterManaValue(7)}>
          <img className="mana-symbol" src={seven} alt="seven mana cost" />
        </button>
      </div>
      <div className="types">
        <button onClick={() => filterType('Planeswalker')}>
          <img className="mana-symbol" src={planeswalker} alt="planeswalker symbol" />
        </button>
        <button onClick={() => filterType('Creature')}>
          <img className="mana-symbol" src={creature} alt="creature symbol" />
        </button>
        <button onClick={() => filterType('Instant')}>
          <img className="mana-symbol" src={instant} alt="instant symbol" />
        </button>
        <button onClick={() => filterType('Sorcery')}>
          <img className="mana-symbol" src={sorcery} alt="sorcery symbol" />
        </button>
        <button onClick={() => filterType('Enchantment')}>
          <img className="mana-symbol" src={enchantment} alt="enchantment symbol" />
        </button>
        <button onClick={() => filterType('Artifact')}>
          <img className="mana-symbol" src={artifact} alt="artifact symbol" />
        </button>
        <button onClick={() => filterType('Land')}>
          <img className="mana-symbol" src={land} alt="land symbol" />
        </button>
      </div>
      <div className="rarities">
        <button onClick={() => filterRarity('mythic')}>
          <div className='mythic rarity'></div>
        </button>
        <button onClick={() => filterRarity('rare')}>
          <div className='rare rarity'></div>
        </button>
        <button onClick={() => filterRarity('uncommon')}>
          <div className="uncommon rarity"></div>
        </button>
        <button onClick={() => filterRarity('common')}>
          <div className="common rarity"></div>
        </button>
      </div>
      <button onClick={resetFilter}>Reset</button>
    </div>
  );
}
