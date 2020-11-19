import React from 'react'
import PropTypes from 'prop-types'
import { Div, H1, P, Span } from '../../styles/style'

const Article = props => {
  return (
    <Div>
      <H1>{props.productData.name}</H1>
      <P>{props.productData.tagline}</P>
      <Span>{props.productData.user.name}</Span>
    </Div>
  )
}

Article.propTypes = {
  productData: PropTypes.any
}

export default Article
