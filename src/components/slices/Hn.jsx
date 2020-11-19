import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const HnTitle = styled('div')`
  display: block;
`

const Hn = ({ slice }) => (
  <HnTitle dangerouslySetInnerHTML={{ __html: slice.primary.hn.html }} />
)

Hn.propTypes = {
  slice: PropTypes.object.isRequired,
}

export default Hn
