import { IPizzaList } from '@/data/@types/IPizzaList';
import styles from './PizzaList.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function PizzaList({pizzas}: {pizzas: IPizzaList[]}){
    return<ul className={styles['pizza-list']}>
        {
            pizzas.map(pizza => (
                <PizzaListItem key={pizza.id} pizza={pizza} />)
            )
        }
    </ul>
}
export function PizzaListItem({pizza}: {pizza:IPizzaList}){
    return (
        <li className={styles['pizza-list-item']}>
            <Link href={`produtos/pizzas/${pizza.slug}`}>
                <div className={styles['pizza-picture']}>
                    <Image src={pizza.picture} alt={pizza.title} />
                </div> 
                <h2 className={styles['pizza-title']}>{pizza.title}</h2>
                <p className={styles['pizza-description']}>{pizza.description}</p>
                <div className={styles['pizza-price']}>
                    <p>R$ {pizza.price}</p>
                    <button>Pedir</button>
                </div>
            </Link>
        </li>
    )
}