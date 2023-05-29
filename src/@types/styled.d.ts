import 'styled-components'
import { defaultTheme } from '../styles/defaultTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

// faz o tema ficar tipado, é padrao nos projetos basta copiar e colar