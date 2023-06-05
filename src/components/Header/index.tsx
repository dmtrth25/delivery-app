import { FC } from "react"
import { NavLink } from "react-router-dom"
import { BsShop } from "react-icons/bs"
import { AiOutlineShoppingCart } from "react-icons/ai"
import "./Header.scss"

const Header: FC = () => {
  return (
    <div className="header">
      <NavLink to="/" className="link">
        Shop <BsShop size={20} style={{ paddingLeft: "5px" }} />
      </NavLink>
      <NavLink to="/cart" className="link">
        Shopping Cart <AiOutlineShoppingCart size={30} />
      </NavLink>
    </div>
  )
}

export default Header
