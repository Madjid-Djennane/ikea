import styled from 'styled-components'

const Div = styled.article`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const H1 = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #333;
`

const P = styled.p`
  flex: 1;
  line-height: 1.4;
`

const Span = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 2em 0 0 0;
`
const Span2 = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #999;
  letter-spacing: 0.05em;
  margin: 1em 0 0 0;
`

export { Div, H1, P, Span, Span2 }
