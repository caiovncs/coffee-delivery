import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { SuccessContainer, SuccessDetailsdContainer } from './styles'
import illustration from '../../assets/Illustration.svg'
import { RegularText, TitleText } from '../../components/Typhography'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { useTheme } from 'styled-components'

export function Success() {
  const { colors } = useTheme()

  return (
    <SuccessContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <SuccessDetailsdContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em <strong>Rua faisão, 10</strong>
                <br />
                Ouro preto - olinda- pe
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Timer weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20-30min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Crédito</strong>
              </RegularText>
            }
          />
        </SuccessDetailsdContainer>
        <img src={illustration} alt="" />
      </section>
    </SuccessContainer>
  )
}
