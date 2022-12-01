import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, officia.
      </p>
      <Link to={`/Swap`}>Salut</Link>
    </main>
  );
}

export default Home;
