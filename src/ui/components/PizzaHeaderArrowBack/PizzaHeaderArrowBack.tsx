import Image from 'next/image'
import style from './PizzaHeaderArrowBack.module.css'
import ArrowBack from '/public/img/ArrowBack.svg'
import {INavProps} from '@/data/@types/INavProps'

export default function PizzaHeaderArrowBack({children}: INavProps){
    return (
        <div className={style['pizza-back']}>
                <button onClick={() => history.back()}>
                    <Image src={ArrowBack} alt='voltar' />
                </button>
            <div>
                {children}
            </div>
        </div>
    )
}