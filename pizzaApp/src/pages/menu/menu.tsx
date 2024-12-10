import cn from "classnames";
import styles from "./menu.module.css";
import Header from "../../assets/components/header/header";
import Search from "../../assets/components/search/search";



function Menu () {
  return (
    <div className={cn(styles.head)}>
       <Header>Меню</Header>
       <Search placeholder={"Введите блюдо и состав"}/>
    </div>
  )
}

export default Menu;