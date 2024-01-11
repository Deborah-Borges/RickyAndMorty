import { CardItem } from '../CardItem'
import styles from './Card.module.css'

export default function Card({ personagens }) {
    return (
        <section>
            <div className={styles.grid}>
                {personagens?.map((item, index) => (
                    <CardItem {...item} key={index}/>
                ))}
            </div>
        </section>
    )
}