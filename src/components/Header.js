import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/Accueil">
               
              </Link>
            </li>
            <li>
              <Link href="/directions">
               
              </Link>
            </li>
            <li>
              <Link href="/employes">
                
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
