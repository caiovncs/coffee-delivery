import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: column;

  > h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font: ${(props) => props.theme.titleL};
    margin-top: 2rem;
    margin-bottom: 54px;
  }

  .coffee {
    display: grid;
    grid-template-columns: 256px 256px 256px 256px;
    gap: 32px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      height: 310px;
      position: relative;
      background-color: ${(props) => props.theme['base-card']};
      border-radius: 0px 36px 0px 36px;
      padding: 20px;
    }

    img {
      position: absolute;
      margin-bottom: 12px;
      top: -20px;
      width: 120px;
      height: 120px;
    }

    .tag {
      margin-bottom: 16px;
      padding: 4px 8px;
      background-color: ${(props) => props.theme['yellow-light']};
      gap: 40px;
      border-radius: 100px;
      text-align: center;
      color: ${(props) => props.theme['yellow-dark']};
      font: ${(props) => props.theme.tag};
    }

    .nome {
      color: ${(props) => props.theme['base-subtitle']};
      font: ${(props) => props.theme.titleS};
      margin-bottom: 8px;
    }

    .desc {
      color: ${(props) => props.theme['base-label']};
      font: ${(props) => props.theme.regularS};
      margin-bottom: 33px;
      text-align: center;
    }

    .preco {
      color: ${(props) => props.theme['base-text']};
      font: ${(props) => props.theme.titleM};
    }

    .preco::before {
      content: 'R$';
      font: ${(props) => props.theme.regularS};
      margin-right: 3px;
    }

    .buy {
      display: flex;
      height: 38px;
      flex-direction: row;
      align-items: center;
      /* justify-content: space-between; */
      gap: 16px;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .qtd {
      padding: 8px;
      gap: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme['base-button']};
      border-radius: 6px;
      height: 38px;

      > span {
        color: ${(props) => props.theme['base-title']};
        font: ${(props) => props.theme.regularM};
      }
    }

    .teste {
      color: white;
      /* text-align: center; */
    }
    .buycart {
      padding: 0.5rem;
      background-color: ${(props) => props.theme['purple-dark']};
      display: flex;
      align-items: center;
      border-radius: 6px;
      cursor: pointer;
    }
  }
`
