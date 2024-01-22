import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import styles from './Personagem.module.css'
import { api } from '../../sercives/api'
import { useParams } from 'react-router-dom'


export default function Personagens() {

    const [personagens, setPersonagens] = useState([])

    const getId = useParams()
    console.log(getId)

    const getPersonagens = async () => {
        const res = await api.get(`/character/${getId.id}`)
        console.log(res.data)
        setPersonagens(res.data)
    }

    useEffect(() => {
        getPersonagens()
    }, [])


    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.card}>
                <img src={personagens.image} alt="" />
            </div>

            <div className={styles.text}>
                <div>
                    <h1>{personagens.name}</h1>
                </div>
                    <p>{personagens.status}</p>
                    <p>{personagens.species}</p>
                    <p>{personagens.gender}</p>
                    <p>{personagens.origin?.name}</p>
                    <p>{personagens.location?.name}</p>
            </div>
        </div>
    )
}