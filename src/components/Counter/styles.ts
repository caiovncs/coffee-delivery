import styled from 'styled-components'

export const CouterStl = styled.span`
  padding: 8px;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  height: 38px;

  button {
    color: ${(props) => props.theme.purple};
    background-color: transparent;
    border: none;
  }
  > span {
    color: ${(props) => props.theme['base-title']};
    font: ${(props) => props.theme.regularM};
  }
`
