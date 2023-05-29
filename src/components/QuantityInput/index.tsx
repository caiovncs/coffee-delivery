import { Minus, Plus } from '@phosphor-icons/react'
import { QuantityInputContainer, IconWrapper } from './styles'

interface QuantityInputProps {
  size?: 'medium' | 'small'
  quantity: number
}

export function QuantityInput({
  quantity,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1}>
        <Minus size={14} />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper>
        <Plus size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
