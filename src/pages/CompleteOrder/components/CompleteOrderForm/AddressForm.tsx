import React from 'react'
import { AddressFormContainer } from './styles'
import { Input } from '../../../../components/Input'

export const AddressForm = () => {
  return (
    <AddressFormContainer>
      <Input placeholder="CEP" type="number" className="cep" />
      <Input placeholder="Rua" className="street" />
      <Input type="number" placeholder="Número" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AddressFormContainer>
  )
}
