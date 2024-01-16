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
        <>
        <Header />
        <div>
            <h1>
                {personagens?.location.name}
            </h1>
        </div>
        </>
    )
}