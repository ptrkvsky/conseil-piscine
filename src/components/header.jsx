import React from 'react'

import { Logo, BurgerButton, Nav, HeaderWrapper } from '../styles/common/header'

const Header = () => (
  <HeaderWrapper>
    <div className="header-flex-wrapper">
      <Logo>logo</Logo>
      <BurgerButton
        aria-label="Ouvre le menu"
        className="burger-menu-button"
        type="button"
      >
        MENU
      </BurgerButton>
      <Nav>
        <ul>
          <li>
            <a href="/" title="Faire entretenir sa piscine">
              Entretien
            </a>
          </li>
          <li>
            <a href="/guide-achat" title="Dépannage piscine">
              Dépannage
            </a>
          </li>
          <li>
            <a
              href="/comment-entretenir"
              title="Comment entretenir son clavier meca en 2020 ?"
            >
              Construction piscine
            </a>
          </li>
        </ul>
      </Nav>
    </div>
  </HeaderWrapper>
)

export default Header
