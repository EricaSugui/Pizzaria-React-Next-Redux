import Image from "next/image";
import styles from './PizzaPage.module.css';
import { IPizzaList } from "@/data/@types/IPizzaList";
import Rating from '/public/img/Rating.svg'
import Clock from '/public/img/Clock.svg'
import Kcal from '/public/img/Kcal.svg'
import Minus from '/public/img/Minus.svg'
import Plus from '/public/img/Plus.svg'
import PizzaHeaderArrowBack from "../PizzaHeaderArrowBack/PizzaHeaderArrowBack";
import PizzaFooter from "../PizzaFooter/PizzaFooter";

export default function PizzaPage({pizza}: {pizza: IPizzaList}){
    return (
            <><PizzaHeaderArrowBack />
        <div className={styles['pizza-container']}>
            <div className={styles['pizza-picture']}>
                <Image src={pizza.picture} alt={pizza.title} />
            </div>

            <div className={styles['pizza-main']}>

                <h2 className={styles['pizza-title']}>{pizza.title}</h2>
                <div className={styles['pizza-price']}>
                    <div className="mt-2 flex items-center text-m text-gray-500 gap-2">
                        <Image src={Rating} alt={`rating: ${pizza.rating}`} />
                        {pizza.rating}
                    </div>
                    <div className="mt-2 flex items-center text-m text-gray-500 gap-2">
                        <Image src={Clock} alt={`time to deliver: ${pizza.time}`} />
                        {pizza.time}
                    </div>
                    <div className="mt-2 flex items-center text-m text-gray-500 gap-2">
                        <Image src={Kcal} alt={`Kcal: ${pizza.kcal}`} />
                        {pizza.kcal}
                    </div>
                </div>
                <div className={styles['pizza-content']}>
                    {pizza.description}
                </div>
                <hr />
                <div className={styles['pizza-price']}>
                    <button>
                        <Image src={Minus} alt="diminuir quantidade"/>
                    </button>
                    <div className={styles['pizza-qtd']}>1</div>
                    <button>
                        <Image src={Plus} alt="aumentar quantidade"/>
                    </button>
                    <p>R$ {pizza.price}</p>
                </div>
                <div className={styles['pizza-submit']}>
                    <button>ADICIONAR AO CARRINHO</button>
                </div>  

            </div>

            <PizzaFooter />          
        </div></>
    )
}