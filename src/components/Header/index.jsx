import styles from './Header.module.css'
import Logo from '../../img/ricky1.jpg'

export default function Header() {
    return (
        <header className={styles.header}>
            
            <div className={styles.logo}>
                <img className={styles.logoImg} src={Logo} alt="" />

                <nav>
                    <a href="#">Item 1</a>
                    <a href="#">Item 2</a>
                    <a href="#">Item 3</a>
                </nav>
            </div>

            
        </header>
    )
}