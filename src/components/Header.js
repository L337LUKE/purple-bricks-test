import React from 'react';

import logo from '../assets/logo.png';

const Header = () => (
  <header className="header">
    <div className="header__branding">
        <img src={logo} alt="" />
    </div>
    <div className="header__heading">
        <h1>{`Secure negotiation centre`}</h1>
    </div>
  </header>
);

export default Header;