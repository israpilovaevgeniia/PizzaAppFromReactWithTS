import { InputHTMLAttributes, ReactNode } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean;
    label?: ReactNode;
}

export type { IInput }