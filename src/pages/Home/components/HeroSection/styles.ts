import styled from 'styled-components'
import imgHeroSection from '../../../../assets/intro-background.png'
import { TitleText } from '../../../../components/Typhography'

export const HeroSectionContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${imgHeroSection}) no-repeat center`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroSectionContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
