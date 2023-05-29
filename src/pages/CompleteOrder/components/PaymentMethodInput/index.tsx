import { CreditCard } from '@phosphor-icons/react'
import { PaymentMethodContainer } from './styles'

export const PaymentMethodInput = () => {
  return (
    <PaymentMethodContainer>
      <CreditCard size={16} />
      Cartão de crédito
    </PaymentMethodContainer>
  )
}
