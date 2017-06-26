import React from 'react';

// Components
import Container from './Container';

// Assets
import logo from '../assets/logo.png';

const Header = () => (
  <header className="header">
      <Container>
          <div className="header__branding">
              <img src={logo} alt="" />
          </div>
          <div className="header__heading">
              <h1>{`Secure negotiation centre`}</h1>
          </div>
      </Container>
  </header>
);

export default Header;