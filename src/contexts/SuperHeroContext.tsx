import React from 'react'

export type ProductContextProps = {
    currentSuperhero : number,
    refreshTable: boolean
}

const SuperHeroContext = React.createContext<ProductContextProps>({
    currentSuperhero: 0,
    refreshTable: false
});

export default SuperHeroContext;