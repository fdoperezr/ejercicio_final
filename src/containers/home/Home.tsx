import React, { useState } from 'react'
import SuperHeroList from '../../components/superhero-table/SuperHeroTable'
import SuperHeroManager from '../../components/superhero-manager/SuperHeroManager'
import SuperHeroContext from '../../contexts/SuperHeroContext'

export default function Home() {

    const [currentSuperhero, setcurrentSuperhero] = useState<string>('')


    const handlerSetSuperhero = (newSuperhero: string) => {
        setcurrentSuperhero(newSuperhero)
      }
    return (
        <SuperHeroContext.Provider value={currentSuperhero}>
            <div className='container'>
                <div className="row">
                    <div className="col-7">
                        <SuperHeroList handlerSetSuperhero={handlerSetSuperhero}/>
                    </div>
                    <div className="col-5">
                        <SuperHeroManager handlerSetSuperhero={handlerSetSuperhero}/>
                    </div>
                </div>
            </div>
        </SuperHeroContext.Provider>

    )
}
