import React from 'react'
import { CoffeeList, OurCoffeesContainer } from './styles'
import { TitleText } from '../../../../components/Typhography'
import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeCard'

export const OurCoffees = () => {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
