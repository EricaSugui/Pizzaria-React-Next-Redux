import Image from 'next/image'
import style from './PizzaHeader.module.css'
import avatar from '/public/img/erica-avatar.jpeg'
import search from '/public/img/search.svg'

const Greetings = () => {
    return(
        <>
            <Image src={avatar} alt="profile pic" className={style['pizza-profile']} />
            <div className={style['pizza-hello']} >
                <p><span>Olá, Julia!</span></p>
                <p>Qual vai ser a pizza de hoje?</p>
            </div>
        </>
    )
}
const Search = () => {
    
    return (
        <div className={style['pizza-search']}>
            <input type='text' name='search' placeholder='buscar'/>
            <button type='submit'>
                <Image src={search} alt='buscar' />
            </button>
        </div>
    )
}
const NavMenu = () => {
    return (
        <ul className={style['pizza-navmenu']}>
            <li>TUDO</li>
            <li className={style['pizza-menu-active']}>PIZZAS</li>
            <li>LANCHES</li>
            <li>BEBIDAS</li>
        </ul>
    )
}

export default function PizzaHeader(){
    return (
    <div className={style['pizza-container']}>
        <Greetings />
        <Search />
        <NavMenu />
    </div>
    )
}