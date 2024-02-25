import { IPizzaList } from "@/data/@types/IPizzaList";

export function addItem(item: IPizzaList) {
    return {
        type: 'ADD_ITEM',
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