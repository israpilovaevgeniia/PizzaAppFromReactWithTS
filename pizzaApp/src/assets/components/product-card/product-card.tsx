import cn from "classnames";
import styles from "./product-card.module.css";
import { IProductCardProps } from "./product-card.props";
import { Link } from "react-router-dom";

const cartIcon = "src/assets/shopping-cart.png";
const starIcon = "src/assets/star.png"


function ProductCard ({className, title, desc, price, rating, id, img, ...props}: IProductCardProps) {
    return(
        <Link className={cn(styles.link)} to={"/"}>
            <div className={cn(styles.card, className)} id={id.toString()} {...props}>
                <div 
                  className={cn(styles.head)} 
                  style={{backgroundImage: `url(${img})`}}
                >
                    <div className={cn(styles.price)}>
                        { price }
                    </div>
                    <button className={cn(styles.addToCardBtn)}>
                        <img src={cartIcon} alt="Icon card" />
                    </button>
                    <div className={cn(styles.rating)}>
                        { rating }
                        <img src={starIcon} alt="Icon rating" />
                    </div>
                </div>
                <div className={cn(styles.footer)}>
                    <div className={cn(styles.title)}>
                        { title }
                    </div>
                    <div className={cn(styles.desc)}>
                        { desc }
                    </div>
                </div>

            </div>
        </Link>
   
    )
}

export default ProductCard;