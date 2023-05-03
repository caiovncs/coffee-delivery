import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <span className="location">
          <MapPin size={22} weight="fill" className="mapPin" />
          Paulista, PE
        </span>
        <span className="shoppingCart">
          <ShoppingCart size={22} weight="fill" />
        </span>
      </nav>
    </HeaderContainer>
  )
}
