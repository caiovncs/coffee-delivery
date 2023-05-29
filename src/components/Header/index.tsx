import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/" title="Home Page">
          <img src={logo} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {/* {cartQuantity >= 1 && <span>{cartQuantity}</span>} */}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
