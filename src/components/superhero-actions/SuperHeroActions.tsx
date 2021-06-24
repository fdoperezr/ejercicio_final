import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteSuperHero } from '../../store/module/superheroes/actions'
import { superheroesSelector } from '../../store/module/superheroes/selectors'
import {
    Link,
} from 'react-router-dom'
// No supe como pasar la interfaz hasta aca ToggleSetSuperHeroProps como tipo de handlerSetSuperhero
export default function SuperHeroActions(props: { id: string, handlerSetSuperhero: (newSuperhero: string) => void}) {

    const superHeroes = useSelector(superheroesSelector)
    
    const dispatch = useDispatch()
    const onClickHandler = () =>{
        dispatch(deleteSuperHero(props.id.toString()))
        alert('Super Héroe eliminado correctamente')
    }

    return (
        <>
            <Link type="button" className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Ver Ficha" to={`/superhero/card/${props.id}`}><i className="bi bi-person-badge"></i></Link>
            <button type="button" className="btn btn-sm btn-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar" onClick={ () => props.handlerSetSuperhero(props.id) }><i className="bi bi-pencil"></i></button>
            <button type="button" className="btn btn-sm btn-danger" onClick={onClickHandler} data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar" ><i className="bi bi-trash"></i></button>
        </>
    )
}
