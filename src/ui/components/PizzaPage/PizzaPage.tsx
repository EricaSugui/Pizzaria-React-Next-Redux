import { useState } from "react";
import { useRouter } from "next/router";

import { connect } from 'react-redux'
import { addItem } from '../../../store/actions/item'
import {useDispatch} from 'react-redux'

import Image from "next/image";
import styles from './PizzaPage.module.css';
import { IPizzaList } from "@/data/@types/IPizzaList";
import Rating from '/public/img/Rating.svg'
import Clock from '/public/img/Clock.svg'
import Kcal from '/public/img/Kcal.svg'
import Minus from '/public/img/Minus.svg'
import Plus from '/public/img/Plus.svg'
import Favorite from '/public/img/fav.svg'
import YellowFavorite from '/public/img/favYellow.svg'
import PizzaHeaderArrowBack from "../PizzaHeaderArrowBack/PizzaHeaderArrowBack";
import PizzaFooter from "../PizzaFooter/PizzaFooter";

function PizzaPage(
    pizzasList?: IPizzaList[],
    pizza?: {pizza: IPizzaList}
    ){
    const [ qtd, setQtd ] = useState(1);
    const [ fav, setFav ] = useState(false);
    const router = useRouter(); 
    const dispatch = useDispatch()
    
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
            id: pizzasList.pizza.id,
            title: pizzasList.pizza.title,
            picture: pizzasList.pizza.picture,
            qtd: qtd,
            price: pizzasList.pizza.price,
            finalPrice: pizzasList.pizza.price * qtd,
            fav: fav,
        }
    const handleOrder = () => {
        dispatch(addItem(orderItem))
        router.push("/carrinho")
    }
    const handleFavorite = () => {
        setFav(!fav)
    }
    
    return (
            <>
            <PizzaHeaderArrowBack>
                <button onClick={handleFavorite}>{
                    fav ? (<Image src={YellowFavorite} alt="favorito"/>) : (<Image src={Favorite} alt="favorito"/>)
                }</button>
            </PizzaHeaderArrowBack>

        <div className={styles['pizza-container']}>
            <div className={styles['pizza-picture']}>
                <Image src={pizzasList.pizza.picture} alt={pizzasList.pizza.title} priority={true} />
            </div>

            <div className={styles['pizza-main']}>

                <h2 className={styles['pizza-title']}>{pizzasList.pizza.title}</h2>

                <div className={styles['pizza-price']}>
                    <div className="mt-2 flex items-center text-m text-gray-500 gap-2">
                        <Image src={Rating} alt={`rating: ${pizzasList.pizza.rating}`} />
                        {pizzasList.pizza.rating}
                    </div>
                    <div className="mt-2 flex items-center text-m text-gray-500 gap-2">
                        <Image src={Clock} alt={`time to deliver: ${pizzasList.pizza.time}`} />
                        {pizzasList.pizza.time}
                    </div>
                    <div className="mt-2 flex items-center text-m text-gray-500 gap-2">
                        <Image src={Kcal} alt={`Kcal: ${pizzasList.pizza.kcal}`} />
                        {pizzasList.pizza.kcal}
                    </div>
                </div>

                <div className={styles['pizza-content']}>
                    {pizzasList.pizza.description}
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
                    <p>R$ {pizzasList.pizza.price?.toFixed(2)}</p>
                </div>
                <div className={styles['pizza-submit']}>
                    <button onClick={handleOrder}>ADICIONAR AO CARRINHO</button>
                </div>  

            </div>

            <PizzaFooter />          
        </div>
    </>
    )
}

const mapStateToProps = (state: any) => ({
    pizzasList: state.items.list
})

export default connect(
    mapStateToProps, 
    { addItem }
)(PizzaPage)