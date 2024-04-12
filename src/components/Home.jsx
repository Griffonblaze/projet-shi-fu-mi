import '../App.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {initUser,errorMessage} from '../app/store'
import { useNavigate } from "react-router-dom";


function Home() {

  const {error} = useSelector(state => state.u)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange=(event) => {
    switch(event.target.id){
      case 'name' : 
        setName(event.target.value)
      break;
      case 'email':
        setEmail(event.target.value)
      break;
    }
  }

  const handleSubmit=(event) =>{
    event.preventDefault()
    if(name.trim() == ''){
      dispatch(errorMessage("Le nom est vide"))
      return
    }
    if(email.trim() == ''){
      dispatch(errorMessage("L'adresse mail est vide"))
      return
    }
    // if(!email.match(/^[a-zA-Z_-.]+[@][a-z.]+$/)){
    //   dispatch(errorMessage("l'adresse mail est invalide."))
    // }
    dispatch(initUser({name:name,email:email}))
    navigate("/game")
  }

  return (
    <>
    <h1>Bienvenue sur notre page de jeu: le Shi-fu-mi, ou Pierre-Feuille-Ciseaux</h1>
    <p>Après vous être inscrit, vous allez choisir soit pierre, soit feuille, soit ciseaux.</p>
    <p>Selon le choix de l'adversaire, vous allez gagner, perdre, ou faire une égalité, et gagner un nombre de points correspondants.</p>
    <p>Après 10 manches, la partie se termine, et nous enregistrons votre score.</p>
    
    <p>Inscrivez-vous :</p>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nom :</label>
      <input type="text" id='name' value={name} onChange={handleChange} />
      <label htmlFor="email">Email :</label>
      <input type="text" id='email' value={email} onChange={handleChange} />
      <button className="beginButton" type="submit">Commencer la partie !</button>
    </form>
      {error !== ''? <p>{error}</p> : ''}
    </>
  )
}

/*
Page d'accueil: règles du jeu + inscription

inscription: formulaire avec validation. Tant que les données ne sont pas enregistrées,
la personne ne peut pas accéder au jeu. On enregistre les données dans la partie userSlice
*/

export default Home