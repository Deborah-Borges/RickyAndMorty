import styles from './Header.module.css'
import fotoRAM from '../../img/logo.svg'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={fotoRAM} alt="" />
        </header>
    )
}