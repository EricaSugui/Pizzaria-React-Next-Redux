
import { useRouter } from 'next/router';
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
    const { asPath } = useRouter()
    const slug = asPath === '/' ? `produtos/pizzas/${pizza.slug}` : `pizzas/${pizza.slug}`

    return (
        <li className={styles['pizza-list-item']}>
            <Link href={slug}>
                <div className={styles['pizza-picture']}>
                    <Image src={pizza.picture} alt={pizza.title} priority={true} />
                </div> 
                <h2 className={styles['pizza-title']}>{pizza.title}</h2>
                <p className={styles['pizza-description']}>{pizza.description}</p>
                <div className={styles['pizza-price']}>
                    <p>R$ {pizza.price?.toFixed(2)}</p>
                    <button>Pedir</button>
                </div>
            </Link>
        </li>
    )
}