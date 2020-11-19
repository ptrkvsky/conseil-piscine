import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout.jsx'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  return (
    <Layout>
      <SEO title="Pisciniste à Toulouse" />
      <div className="full-bleed ">
        <Img fluid={sources} />
      </div>
      <div>
        <h1>Pisciniste à Toulouse</h1>
        <p>
          <strong>Conseil Piscine</strong>. Nos experts en piscines et spas
          peuvent vous aider à créer votre jardin de rêve Chez Thomas Pools,
          nous voulons que vous puissiez profiter des chaudes journées d'été de
          la Californie du Sud dans l'oasis de votre jardin de rêve. Qu'il
          s'agisse de profiter du soleil ou d'une bonne baignade, nous savons
          que la conception et la création d'une piscine ou d'un spa parfait
          peuvent être l'un des projets de rénovation les plus gratifiants que
          l'on puisse imaginer. Depuis plus de 20 ans, notre équipe
          d'entrepreneurs en piscines de Los Angeles est fière d'aider nos amis
          et voisins de la vallée de Santa Clarita, de la région du Grand Los
          Angeles et du comté de Ventura à visualiser leurs idées et à les
          concrétiser.
        </p>
        <h2>Les services de votre Pisciniste.</h2>
        <p>
          Jadis synonyme de luxe, la piscine en milieu résidentiel se
          démocratise. De plus en plus d' entre nous peuvent profiter du
          confort, ainsi que du bien être qu'elle apporte à nos étés. Avoir une
          piscine piscine devient indissociable du bonheur de la maison, et
          amène un peu de fraicheur à nos jardins. Bienvenue dans l'univers de
          la piscine familiale où se cotoient convivialité, réunion de famille,
          plongeons des enfants, bref, plaisir et détente. La progression de la
          demande d'implantation (construction) de piscine dans nos jardins ont
          obligés les professionnels du marché de la piscine privée à se
          dépasser. Ils peuvent proposer à chacun de nous un type de piscine
          adapté à nos besoins et surtout à tous les budgets (piscine
          traditionnelle, hors sol, bois, coque polyester , autoportante...)
        </p>
        <p>
          désinfection) de la piscine ne sont pas en reste et peuvent même être
          automatisés. Nous allons modestement essayer de vous donner quelques
          repères qui nous l'espèrons vous aiderons à mettre ne forme votre
          projet. Quoi qu'il en soit nous vous encourageons vivement à prendre
          conseil auprès de spécialistse avant de vous lancer dans l'acquisition
          l'installation ou la construction de votre piscine car piscinier,
          c'est avant tout un métier.
        </p>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    desktopImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.any,
      }),
    }),
    mobileImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.any,
      }),
    }),
  }),
}

export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "pool.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 575, quality: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImage: file(relativePath: { eq: "pool.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
