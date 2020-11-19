import styled from '@emotion/styled'
import theme from '../theme'
import mediaQueries from '../mediaQueries'
import burger from '../../images/burger-menu.svg'

const HeaderWrapper = styled('header')`
  grid-area: header;
  background-color: ${theme.colors.primary};

  position: fixed;
  bottom: 0;
  min-height: 44px;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all cubic-bezier(0.6, -0.28, 0.735, 0.045);
  &.visible {
    min-height: 100vh;
  }
  ${mediaQueries.sm} {
    position: relative;
    padding: 0 1vw;
    bottom: initial;
    width: 100%;
    box-sizing: border-box;
    .header-flex-wrapper {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
`

const Logo = styled('div')`
  display: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  ${mediaQueries.sm} {
    position: relative;
    color: #fff;
  }
`

const BurgerButton = styled('button')`
  width: 24px;
  height: 24px;
  background-image: url(${burger});
  background-size: cover;
  text-indent: -9999px;
  background-color: transparent;
  border: none;

  ${mediaQueries.sm} {
    display: none;
  }
`

const Nav = styled('nav')`
  display: none;
  ${mediaQueries.sm} {
    display: inherit;
  }
  ul {
    padding: 0;
    margin: 10px 0;
    list-style-type: none;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 900;
    line-height: 2;
    a {
      color: #fff;
      text-decoration: none;
    }
    ${mediaQueries.sm} {
      font-size: 16px;
      font-weight: 500;

      li {
        display: inline-flex;
        margin-left: 20px;
      }
    }
  }
`

export { Logo, BurgerButton, Nav, HeaderWrapper }
