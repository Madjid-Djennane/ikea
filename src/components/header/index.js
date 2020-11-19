import React from 'react'
import styled from 'styled-components'
import { string, func } from 'prop-types'

const Header = props => {
  const handleChange = event => {
    props.onChange(event.target.value)
  }
  return (
    <HeaderStyle>
      <Div>
        <LogoImg src='https://www.ikea.com/fr/fr/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg' />
        <InputStyle
          placeholder='Que cherchez-vous ?'
          onChange={handleChange}
          value={props.value}
        />
      </Div>
    </HeaderStyle>
  )
}

Header.propTypes = {
  value: string,
  onChange: func
}

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0px 40px 0px;
`

const Div = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`

const InputStyle = styled.input`
  width: 60%;
  padding: 12px 24px;

  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 18px;
  line-height: 18px;
  color: black;
  background-color: transparent;

  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;
  border-radius: 50px;
  border: 2px solid #575756;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  &::placeholder {
    color: color(#575756 a(0.8));
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  &:hover,
  &:focus {
    outline: 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
  }
`

const LogoImg = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`

export default Header
