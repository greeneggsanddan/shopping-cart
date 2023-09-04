import './Filter.css';

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
      <label htmlFor="search-bar" hidden>Search Bar</label>
      <input id="search-bar" value={query} onChange={handleChange} />
      <div className="color">
        <button onClick={() => filterColor('W')}>White</button>
        <button onClick={() => filterColor('U')}>Blue</button>
        <button onClick={() => filterColor('B')}>Black</button>
        <button onClick={() => filterColor('R')}>Red</button>
        <button onClick={() => filterColor('G')}>Green</button>
        <button onClick={() => filterColor('C')}>Colorless</button>
      </div>
      <div className="mana-value">
        <button onClick={() => filterManaValue(0)}>0</button>
        <button onClick={() => filterManaValue(1)}>1</button>
        <button onClick={() => filterManaValue(2)}>2</button>
        <button onClick={() => filterManaValue(3)}>3</button>
        <button onClick={() => filterManaValue(4)}>4</button>
        <button onClick={() => filterManaValue(5)}>5</button>
        <button onClick={() => filterManaValue(6)}>6</button>
        <button onClick={() => filterManaValue(7)}>7+</button>
      </div>
      <div className="type">
        <button onClick={() => filterType('Creature')}>Creature</button>
        <button onClick={() => filterType('Planeswalker')}>Planeswalker</button>
        <button onClick={() => filterType('Instant')}>Instant</button>
        <button onClick={() => filterType('Sorcery')}>Sorcery</button>
        <button onClick={() => filterType('Enchantment')}>Enchantment</button>
        <button onClick={() => filterType('Artifact')}>Artifact</button>
        <button onClick={() => filterType('Battle')}>Battle</button>
        <button onClick={() => filterType('Land')}>Land</button>
      </div>
      <div className="rarity">
        <button onClick={() => filterRarity('mythic')}>Mythic</button>
        <button onClick={() => filterRarity('rare')}>Rare</button>
        <button onClick={() => filterRarity('uncommon')}>Uncommon</button>
        <button onClick={() => filterRarity('common')}>Common</button>
      </div>
      <button onClick={resetFilter}>Reset</button>
    </div>
  );
}
