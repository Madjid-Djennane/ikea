import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

const ProdcutImg = props => {
  return (
    <ProductImgStyle>
      <Image src={props.image} alt='not found' />
    </ProductImgStyle>
  )
}

ProdcutImg.propTypes = {
  image: string
}

const ProductImgStyle = styled.div`
  display: flex;
  justify-content: center;
`
const Image = styled.img`
  width: 100px;
  height: 100px;
`

export default ProdcutImg
