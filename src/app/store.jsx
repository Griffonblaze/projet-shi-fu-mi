import { configureStore } from '@reduxjs/toolkit'
import {userSlice} from '../features/user/userSlice'
import {gameSlice} from '../features/game/gameslice'

//store contenant l'ensemble des slices
const store = configureStore({
    reducer: {
        //création d'une clé par slice nommée ex pour accéder au
        //store de l'exemple
        u: userSlice.reducer,
        g: gameSlice.reducer
    }
});

export const {turnChange,result} = gameSlice.actions

export const {initUser,errorMessage,addUser} = userSlice.actions

// export const {startTimer, stopTimer} = nameSlice.actions

export default store