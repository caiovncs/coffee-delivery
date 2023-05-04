import styled from 'styled-components'
import background from '../../../assets/Background.svg'

export const MainContainer = styled.main`
  padding-top: 5.75rem;
  padding-bottom: 5.75rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url(${background});

  h1 {
    width: 588px;
    font: ${(props) => props.theme.titleXL};
  }

  p {
    font: ${(props) => props.theme.regularL};
    color: ${(props) => props.theme['base-subtitle']};
    max-width: 588px;
    margin-top: 1rem;
  }

  .item {
    margin-top: 66px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 40px;

    span {
      font: ${(props) => props.theme.regularM};
      color: ${(props) => props.theme['base-text']};
      display: flex;
      align-items: center;
      gap: 12px;

      .iconCart {
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme['yellow-dark']};
        border-radius: 50%;
        padding: 0.5rem;
      }

      .iconPackage {
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme['base-text']};
        border-radius: 50%;
        padding: 0.5rem;
      }

      .iconCoffee {
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme.purple};
        border-radius: 50%;
        padding: 0.5rem;
      }

      .iconTimer {
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme.yellow};
        border-radius: 50%;
        padding: 0.5rem;
      }
    }
  }
`
