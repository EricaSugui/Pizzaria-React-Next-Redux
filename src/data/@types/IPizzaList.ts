import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IPizzaList{
    id: string;
    title: string;
    description?: string;
    picture: StaticImport;
    slug?: string;
    content?: JSX.Element;
    price?: number;
    rating?: string;
    time?: string;
    kcal?: string;
    qtd?: number;
    finalPrice?: number;
    fav?: boolean;
}
