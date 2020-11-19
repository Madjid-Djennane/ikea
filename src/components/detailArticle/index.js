import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Div, H1, P, Span2, Span } from '../../styles/style'

const Article = props => {
  return (
    <Div>
      <H1>{props.productData.name}</H1>

      <P>{props.productData.tagline}</P>

      <P>
        Topics :{' '}
        {props.productData.topics.map(topic => (
          <Span2 key={topic.id}>{topic.name}, </Span2>
        ))}
      </P>

      <P>
        Created at : {'  '}
        <Span>{props.productData.day}</Span>
      </P>

      <Span2>
        <B>Created by : {'  '}</B> {props.productData.user.name}
      </Span2>
      <Span2>
        <B>Website : {'  '}</B>
        <a href={props.productData.user.website_url}>
          {props.productData.user.website_url}
        </a>
      </Span2>
      <Span2>
        <B>Headline : </B>
        {props.productData.user.headline}
      </Span2>
    </Div>
  )
}

Article.propTypes = {
  productData: PropTypes.any
}

const B = styled.b`
  color: black;
`

export default Article
