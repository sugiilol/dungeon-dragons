import { configureStore, createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'


const characterSlice = createSlice({
    name: "character",
    initialState: [
        {
            id: uuidv4(),
            date: "16/09/1987",
            nom: "SuGii",
            race: "Nain",
            classe: "Guerrier",
            carriere: "Tueur de troll",
            age: "36",
            taille: "113",
            cheveux: "Chatain",
            yeux: "bleu"
        },
        {
            id: uuidv4(),
            date: "16/09/1989",
            nom: "Zizitop",
            race: "Elfe",
            classe: "Mage",
            carriere: "Mage du cul",
            age: "78",
            taille: "257",
            cheveux: "Blond",
            yeux: "LGBT"
        }
    ],
    reducers: {
        addCharacter: (state, action) => {
          
            state.push(action.payload)   
            console.log(JSON.stringify(state))  
        },
        deleteCharacter: (state, action) => {

            const characterById = state.findIndex(character => character.id === action.payload)
            state.splice(characterById, 1)
        }
    }
})

export const store = configureStore({
    reducer: {
        character: characterSlice.reducer
    }
})
