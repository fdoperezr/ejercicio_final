import React, { useContext, useEffect, useState } from 'react'
import { SuperHero } from '../../interfaces/SuperHero'
import { useSelector, useDispatch } from 'react-redux'
import { insertSuperHero, updateSuperHero } from '../../store/module/superheroes/actions'
import { superheroesSelector } from '../../store/module/superheroes/selectors'
import SuperHeroContext from '../../contexts/SuperHeroContext'
import { ToggleSetSuperHeroProps } from '../../interfaces/ToggleSetSuperHeroProps';
import { productGetOneSelector } from '../../store/module/products/selectors'
import { initialStateGetOne } from '../../store/module/products/getOneReducer'
import { productGetOneAction } from '../../store/module/products/actions'


export default function SuperHeroManager({ handlerSetSuperhero }: ToggleSetSuperHeroProps) {

    const productData: any = useSelector(productGetOneSelector)
    const [product, setProduct] = useState(initialStateGetOne) 
    const currentProduct: number = useContext<number>(SuperHeroContext);
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productGetOneAction(currentProduct))
    }, [dispatch, currentProduct])

    useEffect(() => {
        setProduct(productData);
        debugger
    }, [productData])


    // const hanlderSubmit = (event: any): void => {
    //     event.preventDefault();
    //     if (currentProduct != 0)
    //     {
    //         dispatch(insertSuperHero(superhero))
    //         alert('Super Héroe ingresado correctamente');
    //         setEmptySuperHero()
    //     }
    //     else
    //     {
    //         dispatch(updateSuperHero(superhero))
    //         alert('Super Héroe actualizado correctamente');
    //     }
    // };

    const setEmptyProduct= () => {
        setProduct(initialStateGetOne)
    }
    const hanlderIngresarNuevo = (event: any): void => {
        // setEmptyProduct()
        handlerSetSuperhero(0)

    };

    const hanlderInput = (event: any): void => {
        setProduct({
            ...product,
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
                        // onSubmit={hanlderSubmit}
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
                                    name="publisher"
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
                                    name="alter_ego"
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
                                    name="first_appearance"
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
