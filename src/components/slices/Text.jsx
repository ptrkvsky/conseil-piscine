import React from 'react'
import PropTypes from 'prop-types'

export default function Text({ slice }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: slice.primary.rich_text.html }} />
  )
}

Text.propTypes = {
  slice: PropTypes.element.isRequired,
}
