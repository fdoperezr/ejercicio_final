import React, { useState, useEffect} from 'react'
import SuperHeroList from '../../components/superhero-table/SuperHeroTable'
import SuperHeroManager from '../../components/superhero-manager/SuperHeroManager'
import SuperHeroContext, { ProductContextProps } from '../../contexts/SuperHeroContext'
import TokenContext from '../../contexts/TokenContext'
import { useSelector, useDispatch } from 'react-redux'
import { loginSelector } from '../../store/module/user/selector'
import { initialStateLogin } from "../../store/module/user/loginReducer"
import { loginAction } from '../../store/module/user/actions'




export default function Home() {

    const [productContextProps, setProductContextProps] = useState<ProductContextProps>({
        currentSuperhero: 0,
        refreshTable: false
    })
    const loginData = useSelector(loginSelector);
    const [token, setToken] = useState(initialStateLogin)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loginAction())
    }, [dispatch])

    useEffect(() => {
        setToken(loginData);
    }, [loginData])

    const handlerSetSuperhero = (newSuperhero: number) => {
        setProductContextProps({
            ...productContextProps,
            currentSuperhero: newSuperhero
        })
    }

    const handlerSetRefreshGrid = (newRefreshTable: boolean) => {
        setProductContextProps({
            ...productContextProps,
            refreshTable: newRefreshTable
        })
    }

    return (
        <TokenContext.Provider value={token.data}>
            <SuperHeroContext.Provider value={productContextProps}>
                <div className='container'>
                    <div className="row">
                        <div className="col-7">
                            <SuperHeroList handlerSetSuperhero={handlerSetSuperhero} handlerSetRefreshGrid={handlerSetRefreshGrid}/>
                        </div>
                        <div className="col-5">
                            <SuperHeroManager handlerSetSuperhero={handlerSetSuperhero} handlerSetRefreshGrid={handlerSetRefreshGrid}/>
                        </div>
                    </div>
                </div>
            </SuperHeroContext.Provider>
        </TokenContext.Provider>
    )
}
