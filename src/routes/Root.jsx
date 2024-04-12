import '../App.css'
import { NavLink } from 'react-router-dom'


function Root() {

    return (
        <>
        <nav>
          <ul>
            <li>
            <NavLink to="/game">
                Jouer au jeu
              </NavLink>
              
            </li>
            <li>
              <NavLink  to="/users">
                Liste des Utilisateurs
              </NavLink>
            </li>
            <li>
            <NavLink to="/">
                Page d'accueil
              </NavLink>
            </li>
          </ul>
        </nav>
        </>
      )
}

export default Root
