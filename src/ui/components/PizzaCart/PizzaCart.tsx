import { useState } from "react";
import { useRouter } from "next/router";
import styles from './PizzaCart.module.css'
import PizzaFooter from "../PizzaFooter/PizzaFooter"
import PizzaHeaderArrowBack from "../PizzaHeaderArrowBack/PizzaHeaderArrowBack"
import Image from 'next/image'
import Hamburguer from '/public/img/hamburguer.svg'
import Minus from '/public/img/Minus.svg'
import Plus from '/public/img/Plus.svg'
import { IPizzaList } from '@/data/@types/IPizzaList'

const CartItem = ({pizza}: {pizza: IPizzaList}) => {
    const [ qtd, setQtd ] = useState(pizza.qtd);
    
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
            <p><span>R$ 8,00</span></p>
        </div>
}
const CartPayment = () => {
    const router = useRouter();
    const handleGoToPayment = () => {
        router.push("/pagamento")
    }

    return <div className={styles['pizza-order-payment']}>
        <div className={styles['pizza-total']}>
            <p>Total</p>
            <p><span>R$ 135,00</span></p>
        </div>
        <button onClick={handleGoToPayment}> IR PARA O PAGAMENTO </button>
    </div>
}
export default function PizzaCart({pizzas}: {pizzas: IPizzaList[]}){
    return<>
        <PizzaHeaderArrowBack>
            <button><Image src={Hamburguer} alt='menu'/></button>
        </PizzaHeaderArrowBack>
        <div className={styles['pizza-order']}>
            <h2>Carrinho</h2>
            {
            pizzas.map(pizza => (
                <CartItem key={pizza.id} pizza={pizza} />)
            )
        }
        <CartPayment />
        </div>
        <PizzaFooter/>
    </>
}