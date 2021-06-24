import { SuperHero } from "../../../interfaces/SuperHero"

  
export const deleteSuperHero = (id: string) => {
    return {
        type: 'SUPERHERO_DELETE',
        payload: {id},
    }
}

// No supe como implementar un get
export const getSuperHero = (id: string) => {
    return {
        type: 'SUPERHERO_GET',
        payload: {id},
    }
}

export const insertSuperHero = (superHero: SuperHero) => {
    return {
        type: 'SUPERHERO_ADD',
        payload: superHero,
    }
}

export const updateSuperHero = (superHero: SuperHero) => {
    return {
        type: 'SUPERHERO_UPDATE',
        payload: superHero,
    }
}

