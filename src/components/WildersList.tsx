import { useWilders } from "../contexts/WildersContext";
import WilderCard from "./WilderCard";
import "./WildersList.css";

export default function WildersList() {
  const { wilders } = useWilders();

  return (
    <main className="container">
      <h2>Wilders</h2>
      <section className="card-row">
        {wilders.map((wilder, index) => (
          <WilderCard key={index} wilder={wilder} />
        ))}
      </section>
    </main>
  );
}
