import { Link } from "react-router-dom";
import "../styles/pages/home.css";
import "../styles/link.css";

function Home() {
  return (
    <main className="home">
      <h2>
        Hé, tu en as marre de squatter ton canapé ? Tu veux partir en vacances,
        tu cherches une destination ? C’est sur Tripder que ça se passe, le
        meilleur plan pour trouver l’idée de ton prochain voyage. Matche avec
        nos images !
      </h2>
      <Link className="fakeButton" to={`/Swap`}>
        Commencer
      </Link>
    </main>
  );
}

export default Home;
