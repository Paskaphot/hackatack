import { Link } from "react-router-dom";
import "../styles/pages/home.css";
import "../styles/link.css";

function Home() {
  return (
    <main className="home">
      <div className="backgroundImage">
        <h2
          style={{
            maxWidth: "800px",
            fontSize: "25px",
            textAlign: "center",
            fontWeight: "600",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "10px",
            color: "#05705a",
          }}
        >
          Hé, tu en as marre de squatter ton canapé ?<br />
          <br /> Tu veux partir en vacances, tu cherches une destination ?{" "}
          <br /> <br /> C’est sur Tripder que ça se passe, le meilleur plan pour
          trouver l’idée de ton prochain voyage.
          <br />
          <br />
          Matche avec nos images !
        </h2>
      </div>
      <Link className="fakeButton" to={`/Swap`}>
        Commencer
      </Link>
    </main>
  );
}

export default Home;
