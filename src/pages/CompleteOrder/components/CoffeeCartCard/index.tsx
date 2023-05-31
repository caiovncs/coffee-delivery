import { Trash } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typhography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import { CartItem } from '../../../../Contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../Hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}
export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const coffeeTotalPrice = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotalPrice)

  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`src/assets/coffees/${coffee.photo}`} />

        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
