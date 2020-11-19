import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import './layout.css'
import '../styles/normalize.css'
import GlobalStyle from '../styles/Global'

import { MainGrid, Main, Footer } from '../styles/common/layout'

const Layout = ({ children }) => (
  <MainGrid>
    <GlobalStyle />
    <Main>{children}</Main>
    <Header />
    <Footer>
      © {new Date().getFullYear()}, Site internet réalisé par Johan Petrikovsky
      -{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.developpeur-web.tech"
      >
        Développeur Web freelance à Toulouse
      </a>
    </Footer>
  </MainGrid>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
