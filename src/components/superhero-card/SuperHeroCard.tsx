import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { superheroesSelector } from '../../store/module/superheroes/selectors'
import {
    useParams,
    useLocation,
    useHistory,
} from 'react-router-dom'

import { SuperHero } from '../../interfaces/SuperHero'
import styles  from './SuperHeroCard.module.css'


export default function SuperHeroCard() {
    const [superHero, setsuperHero] = useState<SuperHero>()
    const superHeroes = useSelector(superheroesSelector)
    const location = useLocation()
    const params: any = useParams()


    useEffect(() => {

        setsuperHero(superHeroes.superheroes.filter((i: { id: string }) => i.id == params.id)[0])

    }, [location])


    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="card">
                    <img src="https://dummyimage.com/400x400/000/fff" alt="" className={`card-img-top ${styles.imagenFicha}`} />
                    <div className="card-body">
                        <h5 className="card-title">{superHero?.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{superHero?.alter_ego}</h6>
                        <p className="card-text">Editorial: {superHero?.publisher}</p>
                        <p className="card-text">Primera aparición: {superHero?.first_appearance}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
