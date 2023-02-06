import { NavLink } from "react-router-dom"

export const Navbar = () => {

  

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
        <div className="navbar-nav">
            <NavLink
            className="navbar-brand" 
            to='/'
            >
                Animelist
            </NavLink>
            <NavLink
             className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }  ` } 
            to='/search'
            >
                search
            </NavLink>
        </div>
    </nav>
  )
}
