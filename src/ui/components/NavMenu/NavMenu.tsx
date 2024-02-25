import { ActiveLink } from '../PizzaLink/PizzaLink'
import styles from './NavMenu.module.css'

export default function NavMenu()  {
    return (
        <ul className={styles['pizza-navmenu']}>
            <li>
                <ActiveLink href="/" activeClassName={styles['pizza-menu-active']}>
                    <p>TUDO</p>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/produtos/pizzas" activeClassName={styles['pizza-menu-active']}>
                    <p>PIZZAS</p>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/produtos/lanches" activeClassName={styles['pizza-menu-active']}>
                    <p>LANCHES</p>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/produtos/bebidas" activeClassName={styles['pizza-menu-active']}>
                    <p>BEBIDAS</p>
                </ActiveLink>
            </li>
        </ul>
    )
}