import { Link } from 'react-router-dom'
import styles from './CardItem.module.css'

import { BsFillSuitDiamondFill, } from "react-icons/bs";

export function CardItem({ name, status, species, type, image, id }) {
    return (
        <>
            <div className={styles.item}>

                <img className={styles.imagem} src={image} alt="" />

                <div className={styles.text}>

                    <h1> {name} </h1>
                    <p> <BsFillSuitDiamondFill /> {status}  </p>
                    <p> <BsFillSuitDiamondFill /> {species} </p>
                    {/* <p> {type}</p> */}

                    <Link to={`/card/${id}`} >
                        
                        <button className={styles.button}>Detail</button>
                    </Link>

                </div>

            </div>
        </>
    )
}