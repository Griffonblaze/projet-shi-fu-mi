import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import {turnChange,result} from '../app/store'
import { useEffect } from 'react'
import { addUser } from '../app/store'

function Game() {

  const {user} = useSelector(state => state.u)
  const {turn, score,  npcChoice, gameState} = useSelector(state => state.g)
  const dispatch = useDispatch()

  const handleClick = (event) =>{
    dispatch(result({choice: event.target.value, score: 10}))
    dispatch(turnChange())
  }

  useEffect(() => {
    if(turn > 10){
      dispatch(addUser(score))
    }
  },[turn])



  if(!Object.keys(user).length){
    return (<h1>Veuillez vous connecter afin de pouvoir jouer au Shi-fu-mi.</h1>)
  }
  else{
  return (
    <>
    
    {turn>10? <h1 className="party">Partie terminée!</h1> : <h1>Jeu en cours, tour {turn}/10.</h1>}
    <div className="buttonsContainer">
    <h2>Choisisez entre "pierre", "feuille" ou "ciseaux"</h2>
    <div className="buttons">
    <button onClick={handleClick} value="pierre" type="button" disabled={turn>10}>Pierre</button>
    <button onClick={handleClick} value="feuille" type="button" disabled={turn>10}>Feuille</button>
    <button onClick={handleClick} value="ciseaux" type="button" disabled={turn>10}>Ciseaux</button>
    </div>
    <p id="score">{gameState != ''? `${gameState}! Le choix de l'ordinateur était : ${npcChoice}` : ''}</p>
    <h2>Score : {score}</h2>
    </div>

    </>
  )
}
}

/*

 1 affichage du tour actuel
 1 zone de texte pour afficher si on a perdu ou pas le tour précédent
 3 boutons: pierre, feuille, ciseaux

*/

export default Game