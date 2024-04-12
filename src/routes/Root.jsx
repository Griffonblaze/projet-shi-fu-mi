import '../App.css'
import { NavLink } from 'react-router-dom'


function Root() {

    return (
        <>
        <nav>
          <ul>
            <li>
            <NavLink to="/game" className="nav-link">
                Jouer au jeu
              </NavLink>
              
            </li>
            <li>
              <NavLink  to="/users" className="nav-link">
                Liste des Utilisateurs
              </NavLink>
            </li>
            <li>
            <NavLink to="/" className="nav-link">
                Page d'accueil
              </NavLink>
            </li>
          </ul>
        </nav>
        </>
      )
}

export default Root
