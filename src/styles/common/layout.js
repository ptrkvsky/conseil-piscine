import styled from '@emotion/styled'
import theme from '../theme'
import mediaQueries from '../mediaQueries'

const MainGrid = styled('div')`
  background: 'yellow';
  display: grid;
  grid-template-rows: auto 10vh 0;
  grid-template-columns: 1fr;
  grid-template-areas:
    'main'
    'header'
    'footer';
  margin: 0 auto;
  min-height: 100vh;

  ${mediaQueries.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 70px auto 50px;
    grid-template-areas:
      'header'
      'main'
      'footer';
  }
`

const Main = styled('div')`
  grid-area: main;
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;

  > * {
    grid-column: 2;
  }
  .full-bleed {
    width: 100%;
    grid-column: 1 / 4;
  }
`

const Footer = styled('footer')`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);

  color: #fff;
`

export { MainGrid, Main, Footer }
