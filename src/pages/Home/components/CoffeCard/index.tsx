import { ShoppingCart } from '@phosphor-icons/react'
import { RegularText, TitleText } from '../../../../components/Typhography'
import {
  CoffeeCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCartWrapper,
} from './styles'
import { QuantityInput } from '../../../../components/QuantityInput'
import { formatMoney } from '../../../../utils/formatMoney'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}
export function CoffeeCard({ coffee }: CoffeeProps) {
  const formattedPrice = formatMoney(coffee.price)

  return (
    <CoffeeCardContainer>
      <img src={`src/assets/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput quantity={1} />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
