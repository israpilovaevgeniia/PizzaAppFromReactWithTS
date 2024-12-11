import cn from "classnames";
import styles from "./menu.module.css";
import Header from "../../assets/components/header/header";
import Search from "../../assets/components/search/search";
import ProductCard from "../../assets/components/product-card/product-card";



function Menu () {
  return (
    <>
    <div className={cn(styles.head)}>
       <Header>Меню</Header>
       <Search placeholder={"Введите блюдо и состав"}/>
    </div>
    <div className={cn(styles.productWrapper)}>
      <ProductCard
        id={1}
        title="Наслаждение"
        desc="Салями, руккола, помидоры, оливки"
        rating={4.5}
        price={300}
        img="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?semt=ais_hybrid"
      />
    </div>
    </>
  )
}

export default Menu;