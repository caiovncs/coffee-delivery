import React from 'react'
import { HeroSection } from './components/HeroSection'
import { HomeContainer } from './styles'
import { OurCoffees } from './components/OurCoffees'
import { useCart } from '../../Hooks/useCart'

export const HomePage = () => {
  // const { cartItem } = useCart()

  return (
    <HomeContainer>
      <HeroSection />
      <OurCoffees />
    </HomeContainer>
  )
}
