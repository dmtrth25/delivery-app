export interface TypeUserForm {
  handleOrderButton: (user: any) => void;
}
  
export interface Shop {
  id: string;
  name: string;
  menu?: MenuItem[];
}
  
export interface MenuItem {
  id: number;
  title: string;
  img: string;
  price: string;
}
  
export interface ListItemsProps {
  shop: Shop;
  selectShop: (id: string) => void;
}

export interface OrdersCartProps {
  user: any
}
  
export interface ProductItemProps {
  item: MenuItem;
  handleClick: (item: MenuItem) => void;
}
  
export interface OrderItemProps {
  item: MenuItem;
  handleClick: (item: MenuItem) => void;
  handleTotalCount: (count: number) => void;
}
  
export interface SidebarProps {
  onButtonClick: (id: string) => void;
  shopsList: Shop[];
  choosedShop: string;
}
