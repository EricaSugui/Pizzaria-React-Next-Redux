import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

export type IPizzaList ={
    id: string;
    title: string;
    description?: string;
    picture?: string | StaticImport;
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
