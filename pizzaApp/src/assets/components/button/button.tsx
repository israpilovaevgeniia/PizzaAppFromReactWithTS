import styles from "./button.module.css"
import { IButton } from "./button.props"
import cn from "classnames";


function Button ({ children, className, size, ...props }: IButton) {
    return (
        <button className={cn(styles.button,styles.primary, className, {
            [styles.large]: size === "L",
            [styles.small]: size === "S",
        })} 
        { ...props }
        >
            { children }
        </button>
    )
}

export default Button