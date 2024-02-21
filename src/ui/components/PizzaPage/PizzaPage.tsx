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
import { useState } from "react";

export default function PizzaPage({pizza}: {pizza: IPizzaList}){
    const [ qtd, setQtd ] = useState(1);
    const [ order, setOrder ] = useState<IPizzaList[]>([]);

    const handleMinus = () => {
        if(qtd < 1){
            return qtd
        }
        setQtd(qtd - 1)
    }
    const handlePlus = () => {
        if(qtd > 9){
            return qtd
        }
        setQtd(qtd + 1)
    }

    const orderItem: IPizzaList = 
        {
            id: pizza.id,
            title: pizza.title,
            picture: pizza.picture,
            qtd: qtd, 
            finalPrice: pizza.price * qtd
        }
    const handleOrder = () => {
        setOrder([...order, orderItem])
    }
    console.log("order: ", order)
    
    return (
            <>
            <PizzaHeaderArrowBack />
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
                    <button onClick={handleMinus}>
                        <Image src={Minus} alt="diminuir quantidade"/>
                    </button>
                    <div className={styles['pizza-qtd']}>{qtd}</div>
                    <button onClick={handlePlus}>
                        <Image src={Plus} alt="aumentar quantidade"/>
                    </button>
                    <p>R$ {pizza.price?.toFixed(2)}</p>
                </div>
                <div className={styles['pizza-submit']}>
                    <button onClick={handleOrder}>ADICIONAR AO CARRINHO</button>
                </div>  

            </div>

            <PizzaFooter />          
        </div></>
    )
}