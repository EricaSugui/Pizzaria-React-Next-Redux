import Image from 'next/image'
import style from './PizzaHeaderDesktop.module.css'
import margerita from '/public/img/margerita.png'
import Cart from '/public/img/faShoppingCart.svg'
import User from '/public/img/faUserAlt.svg'
import Link from 'next/link'
import {INavProps} from '@/data/@types/INavProps'

export default function PizzaHeaderDesktop({children}: INavProps){
    return (
        <div className={style['pizza-desktop']}>
            <div className={style['pizza-header']}>
                <Link href={`/`}>
                    <div className={style['pizza-logo']}>
                        <Image src={margerita} alt='Pizzaria React'/>
                        <div className={style['pizza-logo-name']}>
                            <h1>Pizza React</h1>
                            <p>Pizzaria com NextJS</p>
                        </div>
                    </div>
                </Link>
                <div className={style['pizza-header-right']}>
                    <Image src={Cart} alt='carrinho de compras' />
                    <Image src={User} alt='sua conta' />
                </div>
            </div>
            {children}
        </div>
    )
}