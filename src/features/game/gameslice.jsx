import { createSlice } from '@reduxjs/toolkit'

const initialState = { turn: 1, playerChoice: '', npcChoice:'', gameState: '', score:0 }

export const gameSlice = createSlice({

    name: 'game',
    initialState,
    reducers: {

        turnChange : (state, action) => {
                state.turn++ 
        },

        result: (state,action) => {
            state.playerChoice = action.payload.choice

            const npcChoice = Math.floor(Math.random()*3)
            /*
                Définition du choix de l'ordinateur :
                pierre: 0
                feuille:1
                ciseaux:2
            */

            if(npcChoice==0){
                state.npcChoice='pierre'
            }else if(npcChoice==1){
                state.npcChoice='feuille'
            }else{state.npcChoice='ciseaux'}

            switch(state.playerChoice){
                case 'pierre':
                    if(npcChoice==0){
                        state.gameState = 'égalité'
                    }else if(npcChoice == 1){
                        state.gameState = 'perdu'
                    }else{
                        state.gameState='gagné'
                    }
                    break;
                case 'feuille':
                    if(npcChoice==0){
                        state.gameState = 'gagné'
                    }else if(npcChoice == 1){
                        state.gameState = 'égalité'
                    }else{
                        state.gameState='perdu'
                    }
                    break;
                case 'ciseaux':
                    if(npcChoice==0){
                        state.gameState = 'perdu'
                    }else if(npcChoice == 1){
                        state.gameState = 'gagné'
                    }else{
                        state.gameState='égalité'
                    }
                    break;
            }
            let newScore = 0
            if(state.gameState == 'gagné'){
                newScore = state.score + action.payload.score
            }
            else if(state.gameState == 'perdu'){
                 newScore = state.score - action.payload.score
            }
            else{newScore = state.score}
            if(newScore > 0){
                state.score = newScore
            }else{
                state.score = 0
            }

        }
    },
})