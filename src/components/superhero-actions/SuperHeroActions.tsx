import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Link,
} from 'react-router-dom'
import { productDeleteOneAction } from '../../store/module/products/actions'
import TokenContext from '../../contexts/TokenContext'
import { initialStateDeleteOne } from '../../store/module/products/deleteOneReducer'
import { productDeleteOneSelector } from '../../store/module/products/selectors'
import { LoginResponse } from '../../store/module/user/types'
import { ToggleSetSuperHeroProps } from '../../interfaces/ToggleSetSuperHeroProps';
// No supe como pasar la interfaz hasta aca ToggleSetSuperHeroProps como tipo de handlerSetSuperhero
export default function SuperHeroActions(props: { id: number, handlers: ToggleSetSuperHeroProps}) {

    const productData: any = useSelector(productDeleteOneSelector)
    const [product, setProduct] = useState(initialStateDeleteOne)  
    const token = useContext<LoginResponse>(TokenContext);
    
    const dispatch = useDispatch()
    const onClickHandler = (e: any) =>{
        e.preventDefault()
        dispatch(productDeleteOneAction(props.id, token.jwt!))
        props.handlers.handlerSetRefreshGrid(true)
        alert('Producto eliminado correctamente');
    }

    if (product.loading) return (<div className="d-flex justify-content-center mt-4">Cargando...</div>)

    return (
        <>
            <Link type="button" className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Ver Ficha" to={`/product/card/${props.id}`}><i className="bi bi-person-badge"></i></Link>
            <button type="button" className="btn btn-sm btn-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar" onClick={ () => props.handlers.handlerSetSuperhero(props.id) }><i className="bi bi-pencil"></i></button>
            <button type="button" className="btn btn-sm btn-danger" onClick={onClickHandler} data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar" ><i className="bi bi-trash"></i></button>
        </>
    )
}
