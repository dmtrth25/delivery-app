import { useState } from "react"
import OrdersCart from "../../components/Order/OrderCart"
import UserForm from "../../components/Form"
import "./Cart.scss"

const CartPage = () => {
  const [user, setUser] = useState({})
  const handleOrderButton = (user: any) => {
    setUser(user)
  }

  return (
    <div className="container">
      <UserForm handleOrderButton={handleOrderButton} />
      <OrdersCart user={user} />
    </div>
  )
}

export default CartPage
