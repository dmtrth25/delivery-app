import { FC } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { TypeUserForm } from "../../types"
import "./Form.scss"

const UserForm: FC<TypeUserForm> = ({ handleOrderButton }) => {
  const { register, handleSubmit, reset } = useForm()

  const handleOrder = (data: any) => {
    toast.success(`Thanks ${data.name} for your order!)`)
    handleOrderButton(data)
    reset()
  }

  return (
    <div className="main">
      <h1>Address:</h1>
      <div>
        <form onSubmit={handleSubmit(handleOrder)}>
          <div className="form-field">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              required
              {...register("name" as const)}
              className="input"
            />
          </div>
          <div className="form-field">
            <label htmlFor="address" className="label">
              Address:
            </label>
            <input
              type="text"
              id="address"
              required
              {...register("address" as const)}
              className="input"
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone" className="label">
              Phone number:
            </label>
            <input
              type="text"
              id="phone"
              required
              {...register("phone" as const)}
              className="input"
            />
          </div>
          <div className="form-field">
            <label htmlFor="city" className="label">
              City:
            </label>
            <input
              type="text"
              id="city"
              required
              {...register("city" as const)}
              className="input"
            />
          </div>
          <div className="btn-wrapper">
            <button type="submit">Order</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserForm
