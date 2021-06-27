import React, { useState, useEffect} from 'react'
import SuperHeroList from '../../components/superhero-table/SuperHeroTable'
import SuperHeroManager from '../../components/superhero-manager/SuperHeroManager'
import SuperHeroContext from '../../contexts/SuperHeroContext'
import TokenContext from '../../contexts/TokenContext'
import { useSelector, useDispatch } from 'react-redux'
import { loginSelector } from '../../store/module/user/selector'
import { initialStateLogin } from "../../store/module/user/loginReducer"
import { loginAction } from '../../store/module/user/actions'

export default function Home() {

    const [currentSuperhero, setcurrentSuperhero] = useState<number>(0)
    const loginData: any = useSelector(loginSelector);
    const [token, setToken] = useState(initialStateLogin)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loginAction())
    }, [dispatch])

    useEffect(() => {
        setToken(loginData);
    }, [loginData])

    const handlerSetSuperhero = (newSuperhero: number) => {
        setcurrentSuperhero(newSuperhero)
    }
    return (
        <TokenContext.Provider value={token.data}>
            <SuperHeroContext.Provider value={currentSuperhero}>
                <div className='container'>
                    <div className="row">
                        <div className="col-7">
                            <SuperHeroList handlerSetSuperhero={handlerSetSuperhero} />
                        </div>
                        <div className="col-5">
                            <SuperHeroManager handlerSetSuperhero={handlerSetSuperhero} />
                        </div>
                    </div>
                </div>
            </SuperHeroContext.Provider>
        </TokenContext.Provider>
    )
}
