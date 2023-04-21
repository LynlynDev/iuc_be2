import Head from "next/head";
// import Header from "../components/Header";
import Header from "../../components/Header";
// import Footer from "../components/Footer";
import Footer from "../../components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meilleur employé dans une direction | Accueil</title>
      </Head>

      <Header />

      <main>
        <h1>Meilleur employé dans une direction</h1>
        <p>Bienvenue sur notre application qui vous permet de désigner le meilleur employé dans une direction.</p>

        <Link href="/directions">
          <a>Commencer maintenant</a>
        </Link>
      </main>

      <Footer />
    </div>
  );
}