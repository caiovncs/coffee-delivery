import React from 'react'
import { CompleteOrderContainer } from './styles'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'

export const CompleteOrderPage = () => {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  )
}
