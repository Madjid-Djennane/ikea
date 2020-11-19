import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Back from '../../assets/back.png'

const Home = () => {
  return (
    <Div>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Span>
          <Image src={Back} /> <span>Home</span>
        </Span>
      </Link>
    </Div>
  )
}

const Div = styled.div`
  margin-left: 10px;
  margin-bottom: 25px;
`

const Image = styled.img`
  height: 16px;
  width: 16px;
`

const Span = styled.span`
  font-size: 20px;
  margin: 0;
  color: #333;
  vertical-align: center;
`

export default Home
