import styles from './CardItem.module.css'

export function CardItem({ name, status, species, type, image }) {
    return (
        <>
            <div className={styles.item}>

                <img className={styles.imagem} src={image} alt="" />

                <div className={styles.text}>

                    <h1> {name} </h1>
                    <p> {status} </p>
                    <p> {species}</p>
                    <p> {type}</p>

                </div>

            </div>
        </>
    )
}