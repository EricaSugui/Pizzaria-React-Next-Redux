import Image from 'next/image'
import style from './PizzaHeaderDesktop.module.css'
import ArrowBack from '/public/img/ArrowBack.svg'
import Link from 'next/link'

export default function PizzaHeaderDesktop(){
    return (
        <div className={style['pizza-desktop']}>
            <Link href={`/`}>
                    <h1>DESKTOP</h1>
            </Link>
        </div>
    )
}