import { FC, useEffect, useState } from "react"
import ShopService from "../../../services/shop.service"
import OrderItem from "../OrderItem"
import "./Cart.scss"
import { MenuItem, OrdersCartProps } from "../../../types"

const OrdersCart: FC<OrdersCartProps> = ({ user }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [ordersList, setOrdersList] = useState<MenuItem[]>(
    JSON.parse(localStorage.getItem("orders") || "[]")
  )

  const { updateOrder } = ShopService()

  useEffect(() => {
    let newTotalPrice = 0

    ordersList.forEach((item) => {
      newTotalPrice += Number(item.price)
    })

    setTotalPrice(newTotalPrice)
  }, [ordersList])

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      updateOrder({ ordersList, user }).then((data) => {
        console.log(data)
      })
      setOrdersList([])
      setTotalPrice(0)
      localStorage.clear()
    }
  }, [user])

  const handleClick = (itemId: number) => {
    const newOrdersList = ordersList.filter((el) => el.id !== itemId)
    setOrdersList(newOrdersList)

    let newTotalPrice = 0
    newOrdersList.forEach((item) => {
      newTotalPrice += Number(item.price)
    })

    setTotalPrice(newTotalPrice)
    localStorage.setItem("orders", JSON.stringify(newOrdersList))
  }

  const handleTotalCount = (count: number) => {
    setTotalPrice((totalPrice) => totalPrice + count)
  }

  return (
    <>
      <div className="order">
        {ordersList.length > 0 &&
          ordersList.map((item) => {
            return (
              <li key={item.id}>
                <OrderItem
                  item={item}
                  handleClick={handleClick}
                  handleTotalCount={handleTotalCount}
                />
              </li>
            )
          })}
      </div>
      <div className="total-price">Total price: {totalPrice} грн.</div>
    </>
  )
}

export default OrdersCart
