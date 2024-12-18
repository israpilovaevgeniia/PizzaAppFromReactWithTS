import ProductCard from "../../../assets/components/product-card/product-card";
import { IProduct } from "../../../interfaces/product.interface";
import { IMenuListProps } from "./menu-list.props";
import cn from "classnames";
import styles from "./menu-list.module.css"

 
function MenuList({products}: IMenuListProps) {
   return (
     <div className={cn(styles.productWrapper)}>
        {
        products?.map((product: IProduct) => (
          <ProductCard
          key={product?.id}
          id={product?.id}
          name={product?.name}
          desc={product?.ingredients?.join(", ")}
          rating={product?.rating}
          price={product?.price}
          img={product?.image}
        />
        ))}
     </div>
   )
}

export default MenuList;
 