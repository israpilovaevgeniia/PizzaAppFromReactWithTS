import styles from "./header.module.css";
import cn from "classnames";
import { IHeaderProps } from "./header.props";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Header ({ children, className, ...props }: IHeaderProps) {
    return (
        <h1 {...props} className={cn(styles.h1)}>
            { children }

        </h1> 
    )
}

export default Header; 