import { useLoaderData, useNavigate } from "react-router-dom";
import { IProduct } from "../../interfaces/product.interface";
import cn from "classnames";
import styles from "./product.module.css"
import Header from "../../assets/components/header/header";
import Button from "../../assets/components/button/button";
import arrowImg from "../../assets/arrow.png";
import cartProductImg from "../../assets/shopping-cart.png";


 function Product() {
    const data = useLoaderData() as IProduct[];
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    };

    return (
    <div>
        <div className={cn(styles.header)}>
        <Header>
        <div className={cn(styles.actions)}>
            <Button size="S" className={cn(styles.arrowBtn)} onClick={handleClick}>
                <img src={ arrowImg } alt="стрелка" />
            </Button>
            <h2 className={cn(styles.title)}>{data[0]?.name}</h2>
            <Button className={cn(styles.cartProductBtn)}>
                <img src={ cartProductImg } alt="карзина" />
                <span>В Корзину</span>
            </Button>
        </div>
        </Header>
        </div>
        <div className={cn(styles.wrapper)}>
            <div className={cn(styles.imgWrapper)}>
            <img src={data[0]?.image} alt={data[0]?.image} />
            </div>
            <div className={cn(styles.information)}>
            <p className={cn(styles.text)}>Цена <span>{data[0]?.price}$</span></p>
            <div className={cn(styles.line)}></div>
            <p className={cn(styles.text)}>Рейтинг <span>{data[0]?.rating}</span></p>
            <p className={cn(styles.ingredients)}>Состав:</p>
            <ul className={cn(styles.info)}>
                {data[0]?.ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                ))}
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Product;
