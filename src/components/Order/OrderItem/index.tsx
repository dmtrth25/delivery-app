import { FC, useState } from "react"
import { AiOutlinePlus, AiOutlineMinusCircle } from "react-icons/ai"
import "./OrderItem.scss"
import { OrderItemProps } from "../../../types"

const OrderItem: FC<OrderItemProps> = ({
  item,
  handleClick,
  handleTotalCount,
}) => {
  const [count, setCount] = useState(1)

  const plus = () => {
    if (count < 50) {
      setCount(count + 1)
    }
    handleTotalCount(Number(item.price))
  }

  const minus = () => {
    if (count > 0) {
      setCount(count - 1)
      handleTotalCount(Number(-item.price))
    }
  }

  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={item.img} alt={item.title} />
      </div>
      <div>{item.title}</div>
      <div>{item.price} грн.</div>
      <div className="counter">
        <AiOutlineMinusCircle
          onClick={minus}
          size={22}
          className={count === 0 ? "disabled" : ""}
        />
        <p>{count}</p>
        <AiOutlinePlus onClick={plus} size={22} />
      </div>
      <div className="remove-btn" onClick={() => handleClick(item)}>
        remove
      </div>
    </div>
  )
}

export default OrderItem
