import { ActiveLink } from '../PizzaLink/PizzaLink'
import styles from './NavMenu.module.css'

export default function NavMenu()  {
    return (
        <ul className={styles['pizza-navmenu']}>
            <li>
                <ActiveLink href="/" activeClassName={styles['pizza-menu-active']}>
                    <div>TUDO</div>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/produtos/pizzas" activeClassName={styles['pizza-menu-active']}>
                    <div>PIZZAS</div>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/produtos/lanches" activeClassName={styles['pizza-menu-active']}>
                    <div>LANCHES</div>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/produtos/bebidas" activeClassName={styles['pizza-menu-active']}>
                    <div>BEBIDAS</div>
                </ActiveLink>
            </li>
        </ul>
    )
}