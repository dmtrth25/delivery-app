import { FC, useEffect, useState } from "react"
import ShopService from "../../services/shop.service"
import Sidebar from "../../components/Sidebar"
import { Container } from "./Home.styled"
import ListItems from "../../components/List/ListItems"
import { Shop } from "../../types"

const HomePage: FC = () => {
  const [shopsList, setShopsList] = useState<Shop[]>([])
  const [list, setList] = useState<Shop | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [choosedShop, setChoosedShop] = useState("")

  const { getItems } = ShopService()

  useEffect(() => {
    setIsLoading(true)
    getItems().then((data: Shop[]) => {
      setShopsList(data)
      setList(data[0] || null)
    })
    setIsLoading(false)
  }, [])

  const onButtonClick = (id: string) => {
    const selectedShop = shopsList.find((item) => item.id === id)
    if (selectedShop) {
      setList(selectedShop)
    }
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <Sidebar
            onButtonClick={onButtonClick}
            shopsList={shopsList}
            choosedShop={choosedShop}
          />
          {list && (
            <ListItems
              shop={list}
              selectShop={(id: string) => setChoosedShop(id)}
            />
          )}
        </Container>
      )}
    </>
  )
}

export default HomePage
