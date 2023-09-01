export default function Shop({ shopData }) {
  const cards = shopData.map((card) => <li key={card.id}>{card.name}</li>);

  return <ul>{cards}</ul>
}