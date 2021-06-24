import React, { useContext, useEffect, useState } from 'react'
import { SuperHero } from '../../interfaces/SuperHero'
import { useSelector, useDispatch } from 'react-redux'
import { insertSuperHero, updateSuperHero } from '../../store/module/superheroes/actions'
import { superheroesSelector } from '../../store/module/superheroes/selectors'
import SuperHeroContext from '../../contexts/SuperHeroContext'
import { ToggleSetSuperHeroProps } from '../../interfaces/ToggleSetSuperHeroProps';


export default function SuperHeroManager({ handlerSetSuperhero }: ToggleSetSuperHeroProps) {

    const dispatch = useDispatch()
    const currentSuperHero: string = useContext<string>(SuperHeroContext);
    const superHeroes = useSelector(superheroesSelector)
    const [superhero, setsuperhero] = useState<SuperHero>({
        id: ' ',
        name: '',
        publisher: '',
        alter_ego: '',
        first_appearance: '',
    })

    useEffect(() => {
        setsuperhero(superHeroes.superheroes.filter((i: { id: string }) => i.id == currentSuperHero.toString())[0])
    }, [currentSuperHero]);

    const hanlderSubmit = (event: any): void => {
        event.preventDefault();
        if (currentSuperHero == '')
        {
            dispatch(insertSuperHero(superhero))
            alert('Super Héroe ingresado correctamente');
            setEmptySuperHero()
        }
        else
        {
            dispatch(updateSuperHero(superhero))
            alert('Super Héroe actualizado correctamente');
        }
    };

    const setEmptySuperHero= () => {
        setsuperhero({
            id: ' ',
            name: '',
            publisher: '',
            alter_ego: '',
            first_appearance: ''
        })
    }
    const hanlderIngresarNuevo = (event: any): void => {
        setEmptySuperHero()
        handlerSetSuperhero('')

    };

    const hanlderInput = (event: any): void => {
        setsuperhero({
            ...superhero,
            [event.target.name]: event.target.value
        })

    };

    return (
        <>
            <div
                className="container py-5 text-center">
                <h2>{currentSuperHero == '' ? `Ingresar` : `Actualizar`} Super Héroe</h2>
            </div>
            <div
                className="container d-flex justify-content-center">
                <div
                    className="col-md-7 col-lg-8">
                    <form className="needs-validation"
                        noValidate={false}
                        onSubmit={hanlderSubmit}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label className="form-label"
                                    htmlFor="firstName"
                                >
                                    Nombre
                                    </label>
                                <input className="form-control"
                                    type="text"
                                    id="firstName"
                                    placeholder=""
                                    value={superhero?.name}
                                    name="name"
                                    onChange={hanlderInput}
                                    required />
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label"
                                    htmlFor="lastName"
                                >
                                    Editorial
                                    </label>
                                <input className="form-control"
                                    type="text"
                                    placeholder=""
                                    value={superhero?.publisher}
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
                                    Alter Ego
                                    </label>
                                <input className="form-control"
                                    type="text"

                                    value={superhero?.alter_ego}
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
                                    Primera aparición
                                    </label>
                                <input className="form-control"
                                    type="text"

                                    value={superhero?.first_appearance}
                                    name="first_appearance"
                                    onChange={hanlderInput}
                                    required />
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>

                            <button className="w-100 btn btn-primary btn-lg"
                                type="submit">
                                {currentSuperHero == '' ? `Ingresar` : `Actualizar`}
                            </button>
                            {
                                currentSuperHero != '' ?
                                    <button className="w-100 btn btn-primary btn-lg"
                                        type="button"
                                        onClick={hanlderIngresarNuevo}>
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
