import { Link } from 'react-router-dom'
import styles from './CardItem.module.css'

export function CardItem({ name, status, species, type, image, id }) {
    return (
        <>
            <div className={styles.item}>

                <img className={styles.imagem} src={image} alt="" />

                <div className={styles.text}>

                    <h1> {name} </h1>
                    <p> {status} </p>
                    <p> {species}</p>
                    <p> {type}</p>

                    <Link to={`/card/${id}`} >
                        
                        <button>Luixsx</button>
                    </Link>

                </div>



            </div>
        </>
    )
}