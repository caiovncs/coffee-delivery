import React from 'react'
import { HeroSection } from './components/HeroSection'
import { HomeContainer } from './styles'
import { OurCoffees } from './components/OurCoffees'

export const HomePage = () => {
  return (
    <HomeContainer>
      <HeroSection />
      <OurCoffees />
    </HomeContainer>
  )
}
