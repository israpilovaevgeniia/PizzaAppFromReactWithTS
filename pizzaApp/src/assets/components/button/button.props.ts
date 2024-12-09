import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    size?: "S" | "L"
}

export type { IButton }