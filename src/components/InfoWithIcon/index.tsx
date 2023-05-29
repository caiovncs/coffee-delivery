import React, { ReactNode } from 'react'
import { IconContainer, InfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  text: string | ReactNode
  icon: ReactNode
  iconBg: string
}

// recebe o icne texto e cor do background, que sao os elementos dinamicos desse componente
export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      {/* cor do bg e o icon vai se definido  */}
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {/* //se n for do tipo text é pq tbm vai ter negrito  */}
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
