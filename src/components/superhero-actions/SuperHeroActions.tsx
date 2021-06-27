import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Link,
} from 'react-router-dom'
import { deleteProduct } from '../../clients/products'
import { initialStateDeleteOne } from '../../store/module/products/deleteOneReducer'
import { productDeleteOneSelector } from '../../store/module/products/selectors'
// No supe como pasar la interfaz hasta aca ToggleSetSuperHeroProps como tipo de handlerSetSuperhero
export default function SuperHeroActions(props: { id: number, handlerSetSuperhero: (newSuperhero: number) => void}) {

    const productData: any = useSelector(productDeleteOneSelector)
    const [product, setProduct] = useState(initialStateDeleteOne)  
    
    const dispatch = useDispatch()
    const onClickHandler = (e: any) =>{
        e.preventDefault()
        dispatch(deleteProduct(props.id))
    }

    // useEffect(() => {
    //     setProduct(productData);
    //     if (product.success && !!!product.loading) {
    //         alert('Super Héroe eliminado correctamente')
    //     }
        
    // }, [productData])

    if (product.loading) return (<div className="d-flex justify-content-center mt-4">Cargando...</div>)

    return (
        <>
            <Link type="button" className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Ver Ficha" to={`/superhero/card/${props.id}`}><i className="bi bi-person-badge"></i></Link>
            <button type="button" className="btn btn-sm btn-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar" onClick={ () => props.handlerSetSuperhero(props.id) }><i className="bi bi-pencil"></i></button>
            <button type="button" className="btn btn-sm btn-danger" onClick={onClickHandler} data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar" ><i className="bi bi-trash"></i></button>
        </>
    )
}
