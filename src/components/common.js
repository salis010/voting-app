import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const H2Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: ${props => props.theme.paddingH};
`

export const H2 = styled.h2`
  color: ${props => props.theme.colors.primary};
`

export const H3 = styled.h3`
  margin-top: 0;
  color: ${props => props.theme.colors.h3Color};
`

export const Text = styled.p`
  font-size: 1rem;
  text-decoration: none;
  ${props => props.theme.colors.text};
`

export const Button = styled.button`
  width: 6rem;
  height: 2.5rem;
  font-weight: 800;
  color: white;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
  }
`

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
