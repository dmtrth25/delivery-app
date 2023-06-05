import { FC, useEffect, useState } from "react"
import { MenuItem, ProductItemProps } from "../../../types"
import "./ProductItem.scss"

const ProductItem: FC<ProductItemProps> = ({ item, handleClick }) => {
  const orders = JSON.parse(
    localStorage.getItem("orders") || "[]"
  ) as MenuItem[]
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    setIsSelected(orders?.find((el) => el.id === item.id) ? true : false)
  }, [item.id, orders])

  const onButton = (item: MenuItem) => {
    handleClick(item)
    setIsSelected((prev) => !prev)
  }

  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="title">{item.title}</div>
      <div className="price">{item.price} грн.</div>
      <div
        className="add-btn"
        onClick={() => onButton(item)}
        style={{ backgroundColor: isSelected ? "#FFFF00" : undefined }}
      >
        {isSelected ? "added" : "add to cart"}
      </div>
    </div>
  )
}

export default ProductItem
