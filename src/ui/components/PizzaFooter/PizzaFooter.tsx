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
                        <div>Home</div>
                    </div>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/carrinho" activeClassName={style['pizza-menu-active']}>
                    <div>
                        <Image src={faShoppingCart} alt='Carrinho'/>
                        <div>Carrinho</div>
                    </div>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/promo" activeClassName={style['pizza-menu-active']}>
                    <div>
                        <Image src={faGift} alt='Promoções'/>
                        <div>Promoções</div>
                    </div>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/conta" activeClassName={style['pizza-menu-active']}>
                    <div>
                        <Image src={faUserAlt} alt='Sua Conta'/>
                        <div>Sua Conta</div>
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