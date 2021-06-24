import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SuperHero } from '../../interfaces/SuperHero'
import { superheroesSelector } from '../../store/module/superheroes/selectors'
import SuperHeroActions from '../superhero-actions/SuperHeroActions'
import { ToggleSetSuperHeroProps } from '../../interfaces/ToggleSetSuperHeroProps'


export default function SuperHeroTable({ handlerSetSuperhero }: ToggleSetSuperHeroProps) {

    const superHeroes = useSelector(superheroesSelector)

    return (
        <>
            <table className="mt-5 table table-sm table-bordered table-hover">
                <thead>
                    <tr>
                        <th style={{ width: 150}}>Acciones</th>
                        <th >Nombre</th>
                        <th >Editorial</th>
                        <th >Alter ego</th>
                        <th >Primera aparición</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        superHeroes.superheroes.map(( item : SuperHero) => (
                            <tr key={item.id}>
                                <td style={{textAlign: 'center'}}>
                                   <SuperHeroActions id={item.id} handlerSetSuperhero={handlerSetSuperhero} />
                                </td>
                                <td> { item.name } </td>
                                <td> { item.publisher } </td>
                                <td> { item.alter_ego } </td>
                                <td> { item.first_appearance } </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}
