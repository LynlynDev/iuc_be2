import React from "react";
import Link from "next/link";

const Header = ()=>{
    return(
        <div>
            <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                {/* <a>Accueil</a> */}
              </Link>
            </li>
            <li>
              <Link href="/directions">
                {/* <a>Directions</a> */}
              </Link>
            </li>
            <li>
              <Link href="/employes">
                {/* <a>Employés</a> */}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
        </div>
    )
};
export default Header;