import { HTMLAttributes } from "react";

interface IProductCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "id"> {
    title: string;
    desc: string;
    price: number;
    rating: number;
    id: number;
    img: string;
}

export type { IProductCardProps }