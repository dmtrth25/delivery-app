import { FC, CSSProperties } from "react"
import styled from "styled-components"
import { SidebarProps } from "../../types"

const Container = styled.div`
  width: 500px;
  min-height: 500px;
`
const Button = styled.button`
  background-color: #f0ffff;
  border: none;
  border-radius: 25px;
  padding: 40px;
  margin: 15px;
  width: 200px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to right, #00ffff, #00a3e3);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    background: #d9bbf9;
  }
`

const ButtonStyle: CSSProperties = { pointerEvents: "none", opacity: 0.4 }

const Sidebar: FC<SidebarProps> = ({
  onButtonClick,
  shopsList,
  choosedShop,
}) => {
  const handleClick = (id: string) => {
    onButtonClick(id)
  }

  return (
    <Container>
      <p style={{ fontSize: "25px", color: "#251c1c", fontWeight: "800" }}>
        Shops:
      </p>
      {shopsList.length > 0 &&
        shopsList.map(({ id, name }) => {
          return (
            <li
              key={id}
              onClick={() => handleClick(id)}
              style={choosedShop && choosedShop !== id ? ButtonStyle : {}}
            >
              <Button>{name}</Button>
            </li>
          )
        })}
    </Container>
  )
}

export default Sidebar
