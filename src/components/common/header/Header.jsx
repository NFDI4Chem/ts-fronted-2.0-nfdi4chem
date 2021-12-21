import React from 'react';
import { Navbar } from '../../common' ;

import './Header.css';

function Header () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <img src={"../assets/img/new-nfdi4chemlogo.png"} alt="nfdi4chem logo" height={100} width={180} />
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
    </section>
  )
}

export default Header;