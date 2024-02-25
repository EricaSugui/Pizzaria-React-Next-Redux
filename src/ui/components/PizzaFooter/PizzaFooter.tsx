import Image from 'next/image'
import style from './PizzaFooter.module.css'
import faHome from '/public/img/faHome.svg'
import faShoppingCart from '/public/img/faShoppingCart.svg'
import faGift from '/public/img/faGift.svg'
import faUserAlt from '/public/img/faUserAlt.svg'
import Link from 'next/link'
import { ActiveLink } from '../PizzaLink/PizzaLink'

const NavMenu = () => {
    return (
        <ul className={style['pizza-navmenu']}>
            <li>
                <ActiveLink href="/" activeClassName={style['pizza-menu-active']}>
                    <div>
                        <Image src={faHome} alt='Home'/>
                        <a>Home</a>
                    </div>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/carrinho" activeClassName={style['pizza-menu-active']}>
                    <div>
                        <Image src={faShoppingCart} alt='Carrinho'/>
                        <a>Carrinho</a>
                    </div>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/promo" activeClassName={style['pizza-menu-active']}>
                    <div>
                        <Image src={faGift} alt='Promoções'/>
                        <a>Promoções</a>
                    </div>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/conta" activeClassName={style['pizza-menu-active']}>
                    <div>
                        <Image src={faUserAlt} alt='Sua Conta'/>
                        <a>Sua Conta</a>
                    </div>
                </ActiveLink>
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