import cn from "classnames";
import styles from "./loader.module.css";

function Loader () {
    return (
        <div className={cn(styles.loaderWrapper)}>
            <div className={cn(styles.loader)}></div>
        </div>
    )
}

export default Loader;