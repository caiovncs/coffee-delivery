import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import coffee from '../../../assets/coffee.svg'
import { MainContainer } from './styles'

export function Main() {
  return (
    <MainContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className="item">
          <span>
            <span className="iconCart">
              <ShoppingCart size={16} weight="fill" />
            </span>
            Compra simples e segura
          </span>

          <span>
            <span className="iconPackage">
              <Package size={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </span>

          <span>
            <span className="iconTimer">
              <Timer size={16} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </span>

          <span>
            <span className="iconCoffee">
              <Coffee size={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </span>
        </div>
      </div>
      <div>
        <img src={coffee} alt="" />
      </div>
    </MainContainer>
  )
}
