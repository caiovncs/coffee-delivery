import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../Hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/" title="Home Page">
          <img src={logo} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Paulista, PE
          </HeaderButton>

          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity > 0 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
