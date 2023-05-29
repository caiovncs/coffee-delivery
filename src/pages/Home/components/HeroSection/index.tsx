import React from 'react'
import {
  BenefitsContainer,
  HeroSectionContainer,
  HeroSectionContent,
  IntroTitle,
} from './styles'
import coffee from '../../../../assets/coffee.svg'
import { RegularText } from '../../../../components/Typhography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function HeroSection() {
  const { colors } = useTheme()

  return (
    <HeroSectionContainer>
      <HeroSectionContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              text="Compra simples e segura"
              icon={<ShoppingCart weight="fill" />}
              iconBg={colors['brand-yellow-dark']}
            />
            <InfoWithIcon
              iconBg={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconBg={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconBg={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>

        <img src={coffee} alt="" />
      </HeroSectionContent>
    </HeroSectionContainer>
  )
}
