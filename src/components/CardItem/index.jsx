import styles from './CardItem.module.css'

export function CardItem({name, status, species, type, image}) {
    return (
        <>
            <div>
                <h1> {name} </h1>
                <p> {status} </p>
                <p> {species}</p>
                <p> {type}</p>
                <img src={image} alt="" />
            </div>
        </>
    )
}