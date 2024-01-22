import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import styles from './Home.module.css'
import FotoNome from '../../img/logo.svg'

import { api } from '../../sercives/api'

export default function Home() {

    const [personagens, setPersonagens] = useState([])

    const getPersonagens = async () => {
        const res = await api.get('/character')
        console.log(res.data.results)
        setPersonagens(res.data.results)
    }

    useEffect(() => {
        getPersonagens()
    }, [])

    return (

        <div className={styles.container}>
            <Header />

            <div className={styles.imgNome}>
                <img src={FotoNome} alt="" />
            </div>

            <div className={styles.home}>

                <Card
                    personagens={personagens}
                />
            </div>

        </div>
    )
}