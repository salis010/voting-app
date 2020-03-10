import styled from 'styled-components'

export const H2 = styled.h2`
  color: ${props => props.theme.colors.h2Color};
`

export const H3 = styled.h3`
  margin-top: 0;
  color: ${props => props.theme.colors.h3Color};
`

export const Text = styled.p`
  font-size: 1rem;
`

export const Button = styled.button`
  width: 4rem;
  height: 2rem;
  background-color: ${props => props.theme.colors.tableBorderColor};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`
