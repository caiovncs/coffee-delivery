import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home Page">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <span className="location">
          <MapPin size={22} weight="fill" className="mapPin" />
          Paulista, PE
        </span>
        <NavLink to="/cart" title="Cart">
          <span className="shoppingCart">
            <ShoppingCart size={22} weight="fill" />
          </span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
