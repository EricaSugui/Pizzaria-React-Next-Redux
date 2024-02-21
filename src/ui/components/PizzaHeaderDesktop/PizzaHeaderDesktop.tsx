import Image from 'next/image'
import style from './PizzaHeaderDesktop.module.css'
import margerita from '/public/img/margerita.png'
import Link from 'next/link'
import NavMenu from '../NavMenu/NavMenu'

export default function PizzaHeaderDesktop(){
    return (
        <div className={style['pizza-desktop']}>
            <Link href={`/`}>
                <div className={style['pizza-logo']}>
                    <Image src={margerita} alt='Pizzaria React'/>
                    <div className={style['pizza-logo-name']}>
                        <h1>Pizza React</h1>
                        <p>Pizzaria com NextJS</p>
                    </div>
                </div>
            </Link>
            
            <NavMenu/>            
        </div>
    )
}