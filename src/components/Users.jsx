import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import {NavLink} from 'react-router-dom'
    


function Users() {

  const{users} = useSelector(state => state.u)

  return (
    <>
    <h1 className="usersH1">Liste des utilisateurs</h1>
    <ul>
    {users.map((user,i) => 
    
    <NavLink to={`/user/${i}`} key={i} className="usersList">
        <li className="users">{user.name}</li> 
    </NavLink>
    
    )}
    </ul>
    </>
  )
}

export default Users