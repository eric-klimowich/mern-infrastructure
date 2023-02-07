import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <h1>Welcome {user.name}</h1>
            <Link to='/orders'>Order History</Link>
            &nbsp; | &nbsp;
            <Link to='/orders/new'>New Order</Link>
            &nbsp; | &nbsp;
            <Link to='' onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}