import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 85px;
    height: 40px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 12px;

    span {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px;
      border-radius: 6px;
      cursor: pointer;
    }

    .location {
      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      font: ${(props) => props.theme.regularS};

      .mapPin {
        color: ${(props) => props.theme.purple};
      }
    }

    .shoppingCart {
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
