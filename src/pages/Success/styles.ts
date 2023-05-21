import styled from 'styled-components'

export const SuccessContainer = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .titleSuccess {
    h1 {
      margin-bottom: 4px;
      color: ${(props) => props.theme['yellow-dark']};
      font: ${(props) => props.theme.titleL};
    }
    span {
      color: ${(props) => props.theme['base-subtitle']};
      font: ${(props) => props.theme.regularL};
    }
  }

  .contentSuccess {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .sendData {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 40px;
      border: 2px solid ${(props) => props.theme.purple};
      border-radius: 6px 36px 6px 36px;
      width: 100%;
      max-width: 526px;

      .sendAddress,
      .sendDeliveryTime,
      .sendPayment {
        display: flex;
        align-items: center;
        gap: 12px;

        .addressIcon,
        .deliveryTimeIcon,
        .paymentIcon {
          padding: 0.5rem;
          border-radius: 100%;
          display: flex;
          align-items: center;
          color: #fff;
        }

        .addressIcon {
          background-color: ${(props) => props.theme.purple};
        }
        .deliveryTimeIcon {
          background-color: ${(props) => props.theme.yellow};
        }
        .paymentIcon {
          background-color: ${(props) => props.theme['yellow-dark']};
        }

        .addressContent,
        .deliveryContent,
        .paymentContent {
          p {
            color: ${(props) => props.theme['base-text']};
            font: ${(props) => props.theme.regularM};
          }
        }
      }
    }
  }
`
