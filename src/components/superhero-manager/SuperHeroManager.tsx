import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SuperHeroContext from '../../contexts/SuperHeroContext'
import { ToggleSetSuperHeroProps } from '../../interfaces/ToggleSetSuperHeroProps';
import { productGetOneSelector } from '../../store/module/products/selectors'
import { initialStateGetOne } from '../../store/module/products/getOneReducer'
import { productCreateAction, productGetOneAction } from '../../store/module/products/actions'
import { LoginResponse } from '../../store/module/user/types';
import TokenContext from '../../contexts/TokenContext';
import { ProductCreate } from '../../store/module/products/types';


export default function SuperHeroManager({ handlerSetSuperhero }: ToggleSetSuperHeroProps) {

    const productData: any = useSelector(productGetOneSelector)
    const [product, setProduct] = useState(initialStateGetOne) 
    const currentProduct: number = useContext<number>(SuperHeroContext);
    const token = useContext<LoginResponse>(TokenContext);
    const dispatch = useDispatch()
    const [productCreate, setProductCreate] = useState<ProductCreate>({
        name: '',
        price: 0,
        imgUrl: '',
        description: ''
    })

    useEffect(() => {
        dispatch(productGetOneAction(currentProduct))
    }, [dispatch, currentProduct])

    useEffect(() => {
        setProduct(productData);
    }, [productData])


    const hanlderSubmit = (event: any): void => {
        event.preventDefault();
        if (currentProduct === 0)
        {
            dispatch(productCreateAction(productCreate, token.jwt!))
            alert('Super Héroe ingresado correctamente');
            handlerSetSuperhero(0)
        }
        else
        {
            // dispatch(updateSuperHero(superhero))
            alert('Super Héroe actualizado correctamente');
        }
    };


    const hanlderIngresarNuevo = (event: any): void => {
        // setEmptyProduct()
        handlerSetSuperhero(0)

    };

    const hanlderInput = (event: any): void => {
        setProductCreate({
            ...productCreate,
            [event.target.name]: event.target.value
        })

    };

    if (product.loading ||product.success === null) return (<div className="d-flex justify-content-center mt-4">Cargando...</div>)


    return (
        <>
            <div
                className="container py-5 text-center">
                <h2>{currentProduct === 0 ? `Ingresar` : `Actualizar`} Producto</h2>
            </div>
            <div
                className="container d-flex justify-content-center">
                <div
                    className="col-md-7 col-lg-8">
                    <form className="needs-validation"
                        noValidate={false}
                        onSubmit={hanlderSubmit}
                        >
                        <div className="row g-3">
                            <div className="col-sm-12">
                                <label className="form-label"
                                    htmlFor="firstName"
                                >
                                    Nombre
                                    </label>
                                <input className="form-control"
                                    type="text"
                                    id="firstName"
                                    placeholder=""
                                    value={product?.data.name}
                                    name="name"
                                    onChange={hanlderInput}
                                    required />
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label className="form-label"
                                    htmlFor="lastName"
                                >
                                    Descripción
                                    </label>
                                <input className="form-control"
                                    type="text"
                                    placeholder=""
                                    value={product?.data.description}
                                    name="description"
                                    onChange={hanlderInput}
                                    required />
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>

                            <div className="col-12">
                                <label className="form-label"
                                    htmlFor="email"
                                >
                                    Precio
                                    </label>
                                <input className="form-control"
                                    type="number"

                                    value={product?.data.price}
                                    name="price"
                                    onChange={hanlderInput}
                                    required />
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="form-label"
                                    htmlFor="email"
                                >
                                    URL imagen
                                    </label>
                                <input className="form-control"
                                    type="text"

                                    value={product?.data.imgUrl}
                                    name="imgUrl"
                                    onChange={hanlderInput}
                                    required />
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>

                            <button className="w-100 btn btn-primary btn-lg"
                                type="submit">
                                {currentProduct == 0 ? `Ingresar` : `Actualizar`}
                            </button>
                            {
                                currentProduct != 0 ?
                                    <button className="w-100 btn btn-primary btn-lg"
                                        type="button"
                                        onClick={hanlderIngresarNuevo}
                                        >
                                    Ingresar Nuevo                
                                    </button>
                                    : null
                            }

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
