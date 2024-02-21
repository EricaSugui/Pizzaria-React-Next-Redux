import Image from 'next/image'
import style from './PizzaHeaderArrowBack.module.css'
import ArrowBack from '/public/img/ArrowBack.svg'
import Link from 'next/link'

export default function PizzaHeaderArrowBack(){
    return (
        <div className={style['pizza-back']}>
            <Link href={`/`}>
                <button>
                    <Image src={ArrowBack} alt='voltar' />
                </button>
            </Link>
        </div>
    )
}