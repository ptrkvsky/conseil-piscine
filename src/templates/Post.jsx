import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PostSlices from '../components/PostSlices'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Post = ({ location, data: { prismicPost } }) => {
  console.info(prismicPost)
  return (
    <Layout>
      <Seo
        title={prismicPost.data.post_title.text}
        description={prismicPost.data.post_preview_description.text}
      />
      {console.info(prismicPost)}
      <h1>{prismicPost.data.post_title.text}</h1>
      {prismicPost.data.post_hero_image.fluid && (
        <Img
          alt={prismicPost.data.post_hero_image.alt}
          style={{
            display: 'block',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginBottom: '60px',
            maxWidth: prismicPost.data.post_hero_image.dimensions.width,
            maxHeight: prismicPost.data.post_hero_image.dimensions.height,
          }}
          durationFadeIn={250}
          fluid={prismicPost.data.post_hero_image.fluid}
        />
      )}
      <PostSlices slices={prismicPost.data.post_body} />
      {/* <PostContent prismicPost={prismicPost} /> */}
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      id
      data {
        post_title {
          text
        }
        post_preview_description {
          text
        }
        post_body {
          ... on PrismicPostPostBodyText {
            id
            primary {
              rich_text {
                html
              }
            }
            slice_type
          }
          ... on PrismicPostPostBodyHn {
            id
            primary {
              hn {
                text
                html
              }
            }
          }

          ... on PrismicPostPostBodyHighlightedText {
            id
            primary {
              highlight_title {
                html
              }
            }
            slice_type
          }
          ... on PrismicPostPostBodyImage {
            id
            primary {
              image {
                alt
                dimensions {
                  height
                  width
                }
                localFile {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
        post_hero_image {
          alt
          dimensions {
            height
            width
          }
          fluid {
            srcWebp
            src
            srcSet
            srcSetWebp
            sizes
            base64
            aspectRatio
          }
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
export default Post
