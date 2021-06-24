import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToggleSetSuperHeroProps } from '../../interfaces/ToggleSetSuperHeroProps'
import { productGetAllSelector } from "../../store/module/products/selectors"
import { productGetAllAction } from "../../store/module/products/actions"
import { initialStateGetAll } from "../../store/module/products/getAllReducer"
import { Product } from '../../store/module/products/types'
import styles from './SuperHeroTable.module.css'
import SuperHeroActions from '../superhero-actions/SuperHeroActions'

export default function SuperHeroTable({ handlerSetSuperhero }: ToggleSetSuperHeroProps) {

    const productData: any = useSelector(productGetAllSelector)
    const [products, setProducts] = useState(initialStateGetAll) 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productGetAllAction())
    }, [dispatch])

    useEffect(() => {
        setProducts(productData)
    }, [productData])
    


    if (products.loading ||products.success === null) return (<div className="d-flex justify-content-center mt-4">Cargando...</div>)

    return (
        <>
        
            <table className={`mt-5 table table-sm table-bordered table-hover ${styles.centeredTable}`}>
                <thead>
                    <tr>
                        <th style={{ width: 100}}>Acciones</th>
                        <th> Nombre</th>
                        <th> Descripcion</th>
                        <th> Precio</th>
                        <th> Imagen</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.data.map(( item : Product) => (
                            <tr key={item.id}>
                                <td style={{textAlign: 'center'}}>
                                   <SuperHeroActions id={item.id!} handlerSetSuperhero={handlerSetSuperhero} />
                                </td>
                                <td> { item.name } </td>
                                <td> { item.description } </td>
                                <td> { item.price } </td>
                                <td> { item.imgUrl ? 
                                         <img src={item.imgUrl} alt={item.name} className={`img-thumbnail ${styles.imgProduct}`}/>
                                         : <img src="https://dummyimage.com/200x200/000/fff" alt="Sin imagen" className={`img-thumbnail  ${styles.imgProduct}`} />
                                        } 
                                        </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}
