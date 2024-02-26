import { IPizzaList } from "@/data/@types/IPizzaList";

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function addItem(item: IPizzaList) {
    return {
        type: ADD_ITEM,
        payload: {
            id: item.id,
            title: item.title,
            qtd: item.qtd,
            finalPrice: item.finalPrice,
            price: item.price,
            fav: item.fav,
            picture: item.picture
        }
    }
}

export const updateItem = (item: IPizzaList) => {
    return {
            type: UPDATE_ITEM,
            item
    }
}

export const removeItem = (item: IPizzaList) => {
    return {
            type: REMOVE_ITEM,
            payload: {
                id: item.id,
                title: item.title,
                qtd: item.qtd,
                finalPrice: item.finalPrice,
                price: item.price,
                fav: item.fav,
                picture: item.picture
            }
    }
}