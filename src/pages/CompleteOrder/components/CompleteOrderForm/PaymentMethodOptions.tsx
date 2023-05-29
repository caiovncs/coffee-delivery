import { PaymentMethodOptionsContainer } from './styles'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { CreditCard, Money, Bank } from '@phosphor-icons/react'

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionsContainer>
  )
}
