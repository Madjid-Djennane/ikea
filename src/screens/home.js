/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import styled from 'styled-components'
import Product from '../components/product'
import Header from '../components/header'
import Info from '../components/info'

const home = () => {
  const [filter, setFilter] = useState('')
  const [apiRes, setApiRes] = useState([])
  const [data, setData] = useState([])

  const handleChange = value => {
    setFilter(value)
  }

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    axios({
      url: 'https://api.producthunt.com/v1/posts/all',
      params: {
        'search[category]': 'tech'
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${'793yW4X8-oWuk2zCxHVUpziPxb4FlJruFUAjtPf14jU'}`
      }
    })
      .then(res => {
        setApiRes(res.data.posts)
      })
      .catch(
        err => {
          Swal.fire({
            title: 'Erreur',
            text: 'Une erreur est survenue !',
            icon: 'error'
          })
        },
        { signal: signal }
      )

    return function cleanup() {
      abortController.abort()
    }
  }, [])

  useEffect(() => {
    if (filter === '') {
      return setData(apiRes)
    }
    const res = apiRes.filter(el =>
      el.name.toLowerCase().startsWith(filter.toLowerCase())
    )
    setData(res)
  }, [filter, apiRes])

  return (
    <div>
      <Header value={filter} onChange={handleChange}></Header>
      <Info></Info>
      <HomeStyle>
        {data.map(item => (
          <div key={item.id}>
            <Product productData={item}></Product>
          </div>
        ))}
      </HomeStyle>
    </div>
  )
}

const HomeStyle = styled.div`
  width: 90%;
  max-width: 1340px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export default home
