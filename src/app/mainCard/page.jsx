
const MainCard = () => {
  const cards = async () => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  };
  return (
    <div>
      {cards().then((data) => {
        return data.map((card) => (
          <div key={card.id}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ));
      })}
    </div>
  );
};

export default MainCard;
