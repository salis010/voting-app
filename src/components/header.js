import React from 'react'
import styled from 'styled-components'
import { Link, ImageWrapper } from './common'
import home from '../../images/home.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding-left: ${props => props.theme.paddingH};
  background-color: ${props => props.theme.colors.primary};
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 3rem;
  font-weight: 800;
  margin: 0 1rem;
  color: ${props => props.theme.colors.primary};
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
`

export const Header = () =>
  <Wrapper>
    <Link to='/'>
      <ImageWrapper>
        <img src={home} alt='home' />
      </ImageWrapper>
    </Link>
    <Link to='/create-question'>
      <Button>Create Question</Button>
    </Link>
  </Wrapper>
