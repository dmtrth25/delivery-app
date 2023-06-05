import { FC, useEffect, useState } from "react"
import ProductItem from "../ProductItem"
import { ListItemsProps, MenuItem } from "../../../types"
import "./ListItems.scss"

const ListItems: FC<ListItemsProps> = ({ shop, selectShop }) => {
  const orders = JSON.parse(
    localStorage.getItem("orders") || "[]"
  ) as MenuItem[]
  const [cartList, setCartList] = useState<MenuItem[]>(orders)

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(cartList))
  }, [cartList])

  const handleClick = (item: MenuItem) => {
    const isExist = cartList.find((cartItem) => cartItem.id === item.id)
    if (isExist) {
      const newList = cartList.filter((cartItem) => cartItem.id !== isExist.id)
      setCartList(newList)
    } else {
      setCartList((prevState) => [...prevState, item])
      selectShop(shop.id)
    }
  }

  return (
    <div className="main">
      {shop?.menu?.map((item) => (
        <li key={item.id}>
          <ProductItem item={item} handleClick={handleClick} />
        </li>
      ))}
    </div>
  )
}

export default ListItems
