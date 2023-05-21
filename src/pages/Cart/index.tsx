import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import { CartContainer } from './styles'
import expresso from '../../assets/coffee/expresso.svg'
import { Counter } from '../../components/Counter'
// import americano from '../../../assets/coffee/americano.svg'
// import expressocremoso from '../../../assets/coffee/expressocremoso.svg'
// import cafegelado from '../../../assets/coffee/cafegelado.svg'
// import cafecomleite from '../../../assets/coffee/cafecomleite.svg'
import { NavLink } from 'react-router-dom'

export function Cart() {
  return (
    <CartContainer>
      <div className="dadosContainer">
        <span>Complete seu pedido</span>
        <div className="formContainer">
          <div className="titleFormContainer">
            <MapPinLine size={22} className="mapPinLine" />
            <div>
              <h2>Endereço de entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div className="inputs">
            <input type="text" name="cep" placeholder="CEP" />
            <input type="text" name="rua" className="rua" placeholder="Rua" />
            <input type="text" name="numero" placeholder="Número" />
            <input type="text" name="complemento" placeholder="Complemento" />
            <input type="text" name="bairro" placeholder="Bairro" />
            <input type="text" name="cidade" placeholder="Cidade" />
            <input type="text" name="uf" placeholder="UF" />
          </div>
        </div>
        <div className="pagamentoContainer">
          <div className="titlePagamentoContainer">
            <CurrencyDollar size={22} className="currencyDollar" />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="cartoes">
            <button>
              <CreditCard size={16} color="#8047F8" /> CARTÃO DE CRÉDITO
            </button>
            <button>
              <Bank size={16} color="#8047F8" /> CARTÃO DE DÉBITO
            </button>
            <button>
              <Money size={16} color="#8047F8" />
              DINHEIRO
            </button>
          </div>
        </div>
      </div>

      <div className="coffeeAddToCart">
        <span>Cafés selecionados</span>

        <div className="coffeeSelected">
          <div className="coffeeComponent">
            <div className="coffeeInfo">
              <img src={expresso} alt="" />
              <div className="cofeeDetails">
                <h2>Nome do cafe</h2>
                <span>
                  <Counter />
                </span>
                <button className="removeCoffee">
                  <Trash size={16} color="#8047F8" /> REMOVER
                </button>
              </div>
            </div>
            <span>R$ 9.99</span>
          </div>

          <div className="coffeeComponent">
            <div className="coffeeInfo">
              <img src={expresso} alt="" />
              <div className="cofeeDetails">
                <h2>Nome do cafe</h2>
                <span>
                  <Counter />
                </span>
                <button className="removeCoffee">
                  <Trash size={16} color="#8047F8" /> REMOVER
                </button>
              </div>
            </div>
            <span>R$ 9.99</span>
          </div>

          <div className="coffeeComponent">
            <div className="coffeeInfo">
              <img src={expresso} alt="" />
              <div className="cofeeDetails">
                <h2>Nome do cafe</h2>
                <span>
                  <Counter />
                </span>
                <button className="removeCoffee">
                  <Trash size={16} color="#8047F8" /> REMOVER
                </button>
              </div>
            </div>
            <span>R$ 9.99</span>
          </div>

          <div className="totalValues">
            <div className="totalItens">
              <p>Total de itens</p>
              <span>R$ 9,99</span>
            </div>
            <div className="entrega">
              <p>Entrega</p>
              <span>R$ 2,99</span>
            </div>
            <div className="total">
              <p>Total</p>
              <span>R$ 25,99</span>
            </div>
          </div>
          <NavLink to="/success">
            <button className="confirm">CONFIRMAR PEDIDO</button>
          </NavLink>
        </div>
      </div>
    </CartContainer>
  )
}
