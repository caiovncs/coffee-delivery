import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { SuccessContainer } from './styles'
import illustration from '../../assets/Illustration.svg'

export function Success() {
  return (
    <SuccessContainer>
      <div className="titleSuccess">
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>

      <div className="contentSuccess">
        <div className="sendData">
          <div className="sendAddress">
            <div className="addressIcon">
              <MapPin weight="fill" size={16} />
            </div>

            <div className="addressContent">
              <p>
                Entrega em <b>Nome da rua</b>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div className="sendDeliveryTime">
            <div className="deliveryTimeIcon">
              <Timer weight="fill" size={16} />
            </div>

            <div className="deliveryContent">
              <p>Previsão de entrega</p>
              <p>
                <b>20-30 min</b>
              </p>
            </div>
          </div>

          <div className="sendPayment">
            <div className="paymentIcon">
              <CurrencyDollar size={16} />
            </div>

            <div className="paymentContent">
              <p>Pagamento na entrega</p>
              <p>
                <b>Cartão de crédito</b>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={illustration} alt="" />
        </div>
      </div>
    </SuccessContainer>
  )
}
