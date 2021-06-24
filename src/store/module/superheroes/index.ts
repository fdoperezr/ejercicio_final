
import { SuperHeroes } from '../../../data/SuperHeroes'
import { SuperHero } from '../../../interfaces/SuperHero'
import { Guid } from "guid-typescript";
const inicialState = {
    superheroes : SuperHeroes
}


const superHeroesReducer = (prevState: any = inicialState, action: any) => {
    const superheroesCopia: SuperHero[] = [...prevState.superheroes]
    switch (action.type) {
        
        case 'SUPERHERO_ADD':
            const superHeroInsert: SuperHero = action.payload;
            superHeroInsert.id = Guid.create().toString()
            return {
                superheroes: [...prevState.superheroes, superHeroInsert],
            }
        case 'SUPERHERO_UPDATE':
            
            const superHeroPayload: SuperHero = action.payload
            const superHeroUpdate = superheroesCopia.find((i: SuperHero) => i.id == superHeroPayload.id)
            if (superHeroUpdate != undefined)
            {
                const index = superheroesCopia.indexOf(superHeroUpdate);
                if (index > -1) {
                    superheroesCopia[index].name = superHeroPayload.name;
                    superheroesCopia[index].publisher = superHeroPayload.publisher;
                    superheroesCopia[index].alter_ego = superHeroPayload.alter_ego;
                    superheroesCopia[index].first_appearance = superHeroPayload.first_appearance;
                    superheroesCopia[index].characters = superHeroPayload.characters;
                }
            }
            return {
                superheroes: superheroesCopia
            }
        case 'SUPERHERO_DELETE':
            const idDelete: string = action.payload.id;
            const superHero = superheroesCopia.find((i: SuperHero) => i.id.toString() == idDelete)
            if (superHero != undefined)
            {
                const index = superheroesCopia.indexOf(superHero);
                if (index > -1) {
                    superheroesCopia.splice(index, 1);
                }
            }
          
            return {
                superheroes: superheroesCopia
            }
        default:
            return prevState
    }
}

export default superHeroesReducer;