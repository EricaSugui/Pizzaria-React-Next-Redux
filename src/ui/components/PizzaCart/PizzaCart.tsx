import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {connect} from 'react-redux'
import {updateItem, removeItem} from '@/store/actions/item'
import {useSelector, useDispatch} from 'react-redux'

import styles from './PizzaCart.module.css'
import PizzaFooter from "../PizzaFooter/PizzaFooter"
import PizzaHeaderArrowBack from "../PizzaHeaderArrowBack/PizzaHeaderArrowBack"
import Image from 'next/image'
import Hamburguer from '/public/img/hamburguer.svg'
import Minus from '/public/img/Minus.svg'
import Plus from '/public/img/Plus.svg'
import Trash from '/public/img/trash.svg'
import { IPizzaList } from '@/data/@types/IPizzaList'

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
    const finalPizza = {
        id: pizza.id,
        title: pizza.title,
        picture: pizza.picture,
        qtd: qtd,
        price: pizza.price,
        finalPrice: finalPrice,
        fav: pizza.fav,
    }
    
    const handleRemove = () => {
        dispatch(removeItem(pizza))
    }

    useEffect(()=>{
        dispatch(updateItem(finalPizza))
        console.log('UPDATE ', finalPizza)
    }, [qtd])

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

function PizzaCart(){
    const listUpdated = useSelector((store: any)=> {return store.items})
    const pizzaList = listUpdated.list
    const total = pizzaList.reduce((acc: any, curr: any) => acc + curr.finalPrice, 0);

    const cartItems = pizzaList.map((pizza: IPizzaList) => (
        <CartItem key={pizza.id} pizza={pizza} />
        )
    )

    const CartPayment = () => {
        const router = useRouter();
        const handleGoToPayment = () => {
            router.push("/pagamento")
        }
    
        return <div className={styles['pizza-order-payment']}>
            <div className={styles['pizza-total']}>
                <p>Total</p>
                <p><span>R$ {total.toFixed(2)}</span></p>
            </div>
            <button onClick={handleGoToPayment}> IR PARA O PAGAMENTO </button>
        </div>
    }
    
    return<>
        <PizzaHeaderArrowBack>
            <button><Image src={Hamburguer} alt='menu'/></button>
        </PizzaHeaderArrowBack>
        <div className={styles['pizza-order']}>
            <h2>Carrinho</h2>
            {cartItems}
        <CartPayment />
        </div>
        <PizzaFooter/>
        {console.log('updatedList: ', listUpdated)}
        {console.log('pizzaList: ', listUpdated)}

    </>
}

// const mapStateToProps = (state: any) => ({
//     pizzas: state.items.list,
// })

export default connect(removeItem, {updateItem})(PizzaCart)
