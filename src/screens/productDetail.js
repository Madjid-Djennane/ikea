import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Article from '../components/detailArticle'
import Home from '../components/home'

const ProductDetail = props => {
  const productData = props.location.state
  return (
    <div>
      <Home></Home>
      <Main>
        <Div>
          <Image src={productData.thumbnail.image_url}></Image>
          <Article productData={productData}></Article>
        </Div>
      </Main>
    </div>
  )
}

ProductDetail.propTypes = {
  location: PropTypes.any
}

const Main = styled.div`
  display: felx;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
`

const Div = styled.div`
  background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;

  position: relative;
  top: 0;
  transition: all 0.1s ease-in;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Image = styled.img`
  background-size: cover;
  background-position: center center;

  @media (max-width: 768px) {
    height: 50%;
  }
`

export default ProductDetail
