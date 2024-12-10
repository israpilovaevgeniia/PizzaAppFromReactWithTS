import styles from "./search.module.css";
import cn from "classnames"
import { ISearchProps } from "./search.props";
import { ForwardedRef, forwardRef } from "react";

const searchImg = "src/assets/search.png"

const Search = forwardRef(function Search ({className, ...props}: ISearchProps, ref: ForwardedRef) {
    return (
        <div className={cn(styles.wrapper)}>
            <input
             ref={ref}
             className={cn(styles.input, className)}
             type="text"
             {...props}
            />
            <img 
             src={searchImg} 
             alt="search" 
             className={cn(styles.icon)} 
            />
        </div>
    )
})

export default Search;