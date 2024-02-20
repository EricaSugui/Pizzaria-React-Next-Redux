import { IPizzaList } from "@/data/@types/IPizzaList";
import margerita from '/public/img/margerita.png'

export default function useIndex(){
    const pizzas: IPizzaList[] = [
        {
            id: '1',
            title: 'Margerita',
            slug: 'margerita',
            description: 'Tomate, Manjericão, Queijo, Azeitonas',
            picture: margerita,
            price: '45,00',
            rating: '4,6',
            time: '20 min',
            kcal: '365 kcal',
        },
        {
            id: '2',
            title: 'Portuguesa',
            slug: 'portuguesa',
            description: 'Tomate, Queijo, Ovos, Calabresa, Ervilhas, Azeitonas',
            picture: margerita,
            price: '50,00',
            rating: '4,7',
            time: '25 min',
            kcal: '415 kcal',
        },
        {
            id: '3',
            title: 'Veggie',
            slug: 'veggie',
            description: 'Tomate, mandioqueijo, peperoni de lentilha, shimeji',
            picture: margerita,
            price: '60,00',
            rating: '4,9',
            time: '20 min',
            kcal: '475 kcal',
        },
        {
            id: '4',
            title: 'Quatro Queijos',
            slug: 'quatro_queijos',
            description: 'Tomate, Queijo Mussarela, Queijo Gorgonzola, Queijo Brie, Queijo Catupiry',
            picture: margerita,
            price: '55,00',
            rating: '4,9',
            time: '20 min',
            kcal: '475 kcal',
        },
        {
            id: '5',
            title: 'À Moda da Casa',
            slug: 'a_moda_casa',
            description: 'Tomate, Queijo Mussarela, Queijo Brie, Shimeji, Champignons, Queijo Catupiry',
            picture: margerita,
            price: '55,00',
            rating: '4,9',
            time: '20 min',
            kcal: '475 kcal',
        },
        {
            id: '6',
            title: 'À Moda do Pizzaiolo',
            slug: 'a_moda_pizzaiolo',
            description: 'Tomate, Queijo Mussarela, Calabresa, Milho, Ervilhas, Queijo Gorgonzola, Queijo Catupiry',
            picture: margerita,
            price: '55,00',
            rating: '4,9',
            time: '20 min',
            kcal: '475 kcal',
        },
    ]
    return {
        pizzas,
    }
}