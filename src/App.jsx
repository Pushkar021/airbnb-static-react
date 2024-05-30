import Header from "./assets/Header";
import Hero from "./assets/Hero";
import Data from "./Data";
import Card from "./assets/Card";
export default function App() {
  let a = Data.map((x) => {
    return (
      <Card
      //You can also use this
        // img={x.img}
        // rating={x.stats.rating}
        // reviewCount={x.stats.reviewCount}
        // location={x.location}
        // title={x.title}
        // price={x.price}
      x={x}
      />
    );
  });
  return (
    <div>
      <Header />
      <Hero />
      <section className="cards-list">{a}</section>
    </div>
  );
}
