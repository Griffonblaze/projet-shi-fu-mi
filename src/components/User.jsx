import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {NavLink} from 'react-router-dom'



function User() {

  const { users } = useSelector(state => state.u)
  const { id } = useParams()

  const user = users[id]

  return (
    <>

      <h1>Informations de l'utilisateur : </h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>Score : {user.score}</p>

      <h3>
        <NavLink to="/users">
          Retour à la liste des utilisateurs
        </NavLink>
      </h3>

    </>
  )
}

export default User