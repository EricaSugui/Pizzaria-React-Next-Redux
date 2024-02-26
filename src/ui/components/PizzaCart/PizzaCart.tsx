import { useState } from "react";
import { useRouter } from "next/router";

import {connect} from 'react-redux'
import {removeItem} from '@/store/actions/item'
import {useDispatch} from 'react-redux'

import styles from './PizzaCart.module.css'
import PizzaFooter from "../PizzaFooter/PizzaFooter"
import PizzaHeaderArrowBack from "../PizzaHeaderArrowBack/PizzaHeaderArrowBack"
import Image from 'next/image'
import Hamburguer from '/public/img/hamburguer.svg'
import Minus from '/public/img/Minus.svg'
import Plus from '/public/img/Plus.svg'
import Trash from '/public/img/trash.svg'
import { IPizzaList } from '@/data/@types/IPizzaList'
import { INavProps } from "@/data/@types/INavProps";

const CartItem = ({pizza}: {pizza: IPizzaList}) => {
    const [ qtd, setQtd ] = useState(pizza.qtd);
    const [finalPrice, setFinalPrice] = useState(pizza.finalPrice);
    const dispatch = useDispatch();
    
    const handleMinus = () => {
        if(qtd < 1){
            return qtd
        }
        setQtd(qtd - 1)
        setFinalPrice(finalPrice - pizza.price)
    }
    const handlePlus = () => {
        if(qtd > 9){
            return qtd
        }
        setQtd(qtd + 1)
        setFinalPrice(finalPrice + pizza.price)
    }
    const handleRemove = () => {
        dispatch(removeItem(pizza))
    }

    return < div className={styles['pizza-order-item']}>
            <Image className={styles['pizza-img']} src={pizza.picture} alt={pizza.title} priority={true}/>
        <div className={styles['item-right']}>
            <div className="flex flex-col ">
                <p className="pb-3 text-lg">{pizza.title}</p>
                <div className="flex flex-row h-6 text-2xl space-x-3 items-center">
                    <button onClick={handleMinus}>
                        <Image className="h-5 w-5" src={Minus} alt="diminuir quantidade"/>
                    </button>
                    <div className={styles['pizza-qtd']}>{qtd}</div>
                    <button onClick={handlePlus}>
                        <Image className="h-5 w-5" src={Plus} alt="aumentar quantidade"/>
                    </button>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
            <p><span>R$ {finalPrice?.toFixed(2)}</span></p>
                <div>
                    <button onClick={handleRemove}>
                        <Image src={Trash} alt="Excluir" />
                    </button>
                </div>
            </div>
        </div>
}
const CartPayment = ({children}: INavProps) => {
    const router = useRouter();
    const handleGoToPayment = () => {
        router.push("/pagamento")
    }

    return <div className={styles['pizza-order-payment']}>
        <div className={styles['pizza-total']}>
            <p>Total</p>
            <p>{children}</p>
        </div>
        <button onClick={handleGoToPayment}> IR PARA O PAGAMENTO </button>
    </div>
}

function PizzaCart({pizzas}: {pizzas: IPizzaList[]}){
    const total = pizzas.reduce((acc, curr) => acc + curr.finalPrice, 0);
    
    return<>
        <PizzaHeaderArrowBack>
            <button><Image src={Hamburguer} alt='menu'/></button>
        </PizzaHeaderArrowBack>
        <div className={styles['pizza-order']}>
            <h2>Carrinho</h2>
            {
            pizzas.map(pizza => (
                <CartItem key={pizza.id} pizza={pizza} />
                )
            )
        }
        <CartPayment>
        <span>R$ 
            {total.toFixed(2)}
        </span>
        </CartPayment>
        </div>
        <PizzaFooter/>
    </>
}

const mapStateToProps = (state: any) => ({
    pizzas: state.item.list
})

export default connect(mapStateToProps, {removeItem})(PizzaCart)
