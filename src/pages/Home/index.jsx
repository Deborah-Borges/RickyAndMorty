import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import styles from './Home.module.css'

import { api } from '../../sercives/api'

export function Home() {

    const [personagens, setPersonagens] = useState([])

    const getPersonagens = async() => {
        const res = await api.get('/character')
        console.log(res.data.results)
        setPersonagens(res.data.results)
    }

    useEffect(() =>{
        getPersonagens()
    },[])

    return (
        <div className={styles.home}>
        <Header />
        <Card 
        personagens={personagens}
        
        />
        </div>
    )
}