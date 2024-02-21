import styles from './NavMenu.module.css'

export default function NavMenu()  {
    return (
        <ul className={styles['pizza-navmenu']}>
            <li>TUDO</li>
            <li className={styles['pizza-menu-active']}>PIZZAS</li>
            <li>LANCHES</li>
            <li>BEBIDAS</li>
        </ul>
    )
}