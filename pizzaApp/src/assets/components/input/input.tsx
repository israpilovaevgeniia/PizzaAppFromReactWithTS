import { forwardRef } from "react";
import styles from "./input.module.css";
import cn from "classnames";
import { IInput } from "./input.props";

const Input = forwardRef<HTMLInputElement, IInput> (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({className, label,  isValid, ...props}, ref) => {
        return (
            <div className={cn(styles.inputWrapper, className)}>
                {label && <label className={styles.label}>{label}</label>}
                <input 
                ref={ref}
                className={cn(styles.input, className, {
                    [styles.invalid]: !isValid,
                })}
                {...props}
                />
            </div>
        )
    }
);

Input.displayName = "Input";

export default Input;