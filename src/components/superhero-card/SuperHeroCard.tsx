import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productDeleteOneSelector, productGetOneSelector } from "../../store/module/products/selectors"
import { initialStateGetOne } from "../../store/module/products/getOneReducer"
import { productGetOneAction } from "../../store/module/products/actions"
import {
    useParams,
    useHistory
} from 'react-router-dom'
import styles  from './SuperHeroCard.module.css'
import { debug } from 'console'

export default function SuperHeroCard() {
    const params: any = useParams()
    const history = useHistory();

    const productData: any = useSelector(productGetOneSelector)
    const [product, setProduct] = useState(initialStateGetOne) 

    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productGetOneAction(params.id))
    }, [dispatch, params.id])

    useEffect(() => {
        setProduct(productData);
    }, [productData])

    useEffect(() => {
        if (product.error){
            history.push("/404")
        }
    }, [product, history])
    
    if (product.loading ||product.success === null) return (<div className="d-flex justify-content-center mt-4">Cargando...</div>)

    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="card">
                    { product.data.imgUrl ?
                        <img src={product.data.imgUrl} alt={product.data.name} className={`card-img-top ${styles.imagenFicha}`}/>
                        : <img src="https://dummyimage.com/200x200/000/fff" alt="Sin imagen" className={`card-img-top ${styles.imagenFicha}`} />
                    } 
                    <div className="card-body">
                        <h5 className="card-title">{product.data.name} </h5>
                        <h6 className="card-subtitle mb-2 text-muted">{product.data.description} </h6>
                        <p className="card-text">Precio ($): {product.data.price} </p>
                    </div>
                </div>
            </div>
        </>
    )
}
