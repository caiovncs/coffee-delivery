import styled from 'styled-components'

export const CartContainer = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;

  .titleFormContainer,
  .titlePagamentoContainer {
    display: flex;
    gap: 0.5rem;

    .mapPinLine {
      color: ${(props) => props.theme['yellow-dark']};
    }
    .currencyDollar {
      color: ${(props) => props.theme.purple};
    }

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font: ${(props) => props.theme.regularM};
    }
    p {
      color: ${(props) => props.theme['base-text']};
      font: ${(props) => props.theme.regularS};
    }
  }

  .dadosContainer {
    max-width: 640px;

    > span {
      color: ${(props) => props.theme['base-subtitle']};
      font: ${(props) => props.theme.titleXS};
    }
  }

  .formContainer {
    padding: 2.5rem;
    background-color: ${(props) => props.theme['base-card']};
    margin-top: 1rem;
  }

  .inputs {
    display: grid;
    grid-template-columns: 200px 276px 60px;
    gap: 16px 12px;
    margin-top: 2rem;

    input {
      height: 42px;
      padding: 12px;
      background-color: ${(props) => props.theme['base-input']};
      outline: none;
      border: none;
      border-radius: 4px;
      border: 1px solid transparent;
      font: ${(props) => props.theme.regularS};
      color: ${(props) => props.theme['base-subtitle']};
    }

    input:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
    }

    input::placeholder {
      font: ${(props) => props.theme.regularS};
    }
  }

  input[name='cep'],
  input[name='numero'],
  input[name='bairro'] {
    grid-column: 1;
  }
  input[name='rua'] {
    grid-column: 1/-1;
  }
  input[name='complemento'] {
    grid-column: 2/4;
  }
  input[name='cidade'] {
    grid-column: 2/3;
  }
  input[name='uf'] {
    grid-column: 3/4;
  }

  .pagamentoContainer {
    padding: 2.5rem;
    background-color: ${(props) => props.theme['base-card']};
    margin-top: 0.75rem;

    .cartoes {
      display: flex;
      margin-top: 32px;
      gap: 0.75rem;
    }
    .cartoes button {
      background-color: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-text']};
      font: ${(props) => props.theme.buttonS};
      display: flex;
      width: 100%;
      padding: 1rem;
      gap: 0.75rem;
      border: none;
      border-radius: 6px;

      :hover {
        background-color: ${(props) => props.theme['base-hover']};
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }

  ////////////////////////////

  .coffeeAddToCart {
    width: 448px;

    > span {
      color: ${(props) => props.theme['base-subtitle']};
      font: ${(props) => props.theme.titleXS};
    }

    .coffeeSelected {
      display: flex;
      flex-direction: column;
      padding: 2.5rem;
      background-color: ${(props) => props.theme['base-card']};
      border-radius: 6px 44px;
      margin-top: 1rem;

      .coffeeComponent {
        display: flex;
        justify-content: space-between;
        padding-bottom: 2rem;
        border-bottom: 1px solid ${(props) => props.theme['base-button']};

        :nth-child(n + 2) {
          margin-top: 2rem;
        }

        > span {
          color: ${(props) => props.theme['base-text']};
          font: ${(props) => props.theme.boldM};
        }
      }

      .coffeeInfo {
        display: flex;
        align-items: center;
        gap: 20px;

        img {
          width: 64px;
          height: 64px;
        }
        .cofeeDetails {
          display: grid;
          grid-template-columns: 72px 91px;
          gap: 8px;

          h2 {
            color: ${(props) => props.theme['base-subtitle']};
            font: ${(props) => props.theme.regularM};
            grid-column: 1/-1;
          }

          .removeCoffee {
            grid-column: 2;
            display: flex;
            align-items: center;
            padding: 8px;
            height: 38px;
            gap: 4px;
            border: transparent;
            border-radius: 6px;
            background-color: ${(props) => props.theme['base-button']};
            font: ${(props) => props.theme.buttonS};
            cursor: pointer;

            :hover {
              background-color: ${(props) => props.theme['base-hover']};
              transition: 0.3s;
            }
          }
        }
      }

      .confirm {
        width: 100%;
        background-color: ${(props) => props.theme.yellow};
        color: ${(props) => props.theme.white};
        text-align: center;
        padding: 12px 0px;
        border-radius: 6px;
        border: 2px solid transparent;
        font: ${(props) => props.theme.buttonG};

        :hover {
          border: 2px solid ${(props) => props.theme['yellow-dark']};
          transition: 0.3s;
        }
      }
    }

    .totalValues {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding-top: 2rem;
      padding-bottom: 2rem;

      .totalItens,
      .entrega {
        display: flex;
        justify-content: space-between;
        color: ${(props) => props.theme['base-text']};
        font: ${(props) => props.theme.regularM};
      }

      .total {
        display: flex;
        justify-content: space-between;
        color: ${(props) => props.theme['base-subtitle']};
        font: ${(props) => props.theme.boldL};
      }
    }
  }
`
