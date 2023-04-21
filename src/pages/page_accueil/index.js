import Head from "next/head";
// import '../../styles/suna.css';
import Header from "../../components/Header";
import Footer from "../../components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Meilleur employé dans une direction | Accueil</title>

        <nav>
          <ul>
            <li>
              <Link href="/Accueil" >
               {/* <a>Accueil</a> */}
              </Link>
            </li>
            <li>
              <Link href="/directions" >
               {/* <a>Directions</a> */}
              </Link>
            </li>
            <li>
              <Link href="/employes" >
                {/* <a>Employés</a> */}
              </Link>
            </li>
          </ul>
        </nav>
      </Head>

      {/* <Header /> */}

      <main>
        <h1>Meilleur employé dans une direction</h1>
        <p>Bienvenue sur notre application qui vous permet de désigner le meilleur employé dans une direction.</p>

        <Link href="/directions">
          <div className="nav-link js-scroll-trigger">
          {/* <a>Commencer maintenant</a> */}
          </div>
        </Link>
      </main>

      <Footer />
    </div>
  );
}