import PropTypes from 'prop-types'
import React from 'react'

import Hn from './slices/Hn'
import Image from './slices/Image'
import Text from './slices/Text'

const PostSlices = ({ slices }) =>
  slices.map(slice => {
    const result = (() => {
      switch (slice.__typename) {
        case 'PrismicPostPostBodyHn':
          return <Hn slice={slice} />
        case 'PrismicPostPostBodyText':
          return <Text slice={slice} />
        case 'PrismicPostPostBodyImage':
          return <Image slice={slice} />
        default:
          return false
      }
    })()
    return result
  })

PostSlices.propTypes = {
  slices: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }),
}

export default PostSlices
