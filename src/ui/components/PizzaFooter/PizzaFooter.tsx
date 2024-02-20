import Image from 'next/image'
import style from './PizzaFooter.module.css'
import faHome from '/public/img/faHome.svg'
import faShoppingCart from '/public/img/faShoppingCart.svg'
import faGift from '/public/img/faGift.svg'
import faUserAlt from '/public/img/faUserAlt.svg'

const NavMenu = () => {
    return (
        <ul className={style['pizza-navmenu']}>
            <li className={style['pizza-menu-active']}>
                <Image src={faHome} alt='Home'/>
                Home
            </li>
            <li>
                <Image src={faShoppingCart} alt='Carrinho'/>
                Carrinho
            </li>
            <li>
                <Image src={faGift} alt='Promoções'/>
                Promoções
            </li>
            <li>
                <Image src={faUserAlt} alt='Sua Conta'/>
                Sua Conta
            </li>
        </ul>
    )
}

export default function PizzaFooter(){
    return (
    <div className={style['pizza-container']}>
        <NavMenu />
    </div>
    )
}