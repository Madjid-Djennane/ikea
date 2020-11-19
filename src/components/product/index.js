import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Article from '../../components/article'

const Product = props => {
  return (
    <Link
      to={{
        pathname: '/productDetail',
        state: props.productData
      }}
      style={{ textDecoration: 'none' }}
    >
      <ProductStyle>
        <Image source={props.productData.thumbnail.image_url}></Image>
        <Article productData={props.productData}></Article>
      </ProductStyle>
    </Link>
  )
}

Product.propTypes = {
  productData: PropTypes.any
}

const ProductStyle = styled.div`
  background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 100%;

  position: relative;
  top: 0;
  transition: all 0.1s ease-in;

  &:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`
const Image = styled.div`
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
  background-image: url('${props => props.source}');
`

export default Product
