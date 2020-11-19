import React from 'react'
import styled from 'styled-components'
import Inf from '../../assets/info.png'

const Info = () => {
  return (
    <InfoStyle>
      <Div>
        <Icon>
          <InfoImg src={Inf} />
        </Icon>
        <p>
          Tous nos magasins sont fermés. Nous continuons à vous proposer nos
          produits en vente en ligne, livrés partout en France ou disponibles en
          retrait avec le service « cliquez et emportez ». Nos délais de réponse
          et de livraison peuvent être allongés. Merci pour votre patience.
          Prenez soin de vous.
        </p>
      </Div>
    </InfoStyle>
  )
}

const InfoStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0px 40px 0px;
`

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  border: solid black 1px;
`
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90px;
  text-align: center;
`

const InfoImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 10px 0px 10px;
`

export default Info
