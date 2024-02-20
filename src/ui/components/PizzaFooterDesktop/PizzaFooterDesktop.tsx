import Image from 'next/image'
import style from './PizzaFooterDesktop.module.css'
import faHome from '/public/img/faHome.svg'
import faShoppingCart from '/public/img/faShoppingCart.svg'
import faGift from '/public/img/faGift.svg'
import faUserAlt from '/public/img/faUserAlt.svg'

const Footer = () => {
    return (
        <div className={style['pizza-footer']}>
            <h2>Footer</h2>
        </div>
    )
}

export default function PizzaFooterDesktop(){
    return (
        <Footer />
    )
}