import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.div`
  width: 6rem;
  height: 3rem;
  cursor: pointer;
`

export const Header = () =>
  <Wrapper>
    <Link to='/'><Button>Home</Button></Link>
    <Link to='/create-question'><Button>Create Question</Button></Link>
  </Wrapper>
