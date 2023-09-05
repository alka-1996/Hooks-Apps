import { Link } from 'react-router-dom'
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-dark">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <div className=" navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="Practice">Practice</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="Person">Person</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="Users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="StateManagement">StateManagement</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="UserProvider">UserProvider</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="UserRef">UserRef</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="TudoList">TudoList</Link>
            </li>
          </ul>
          
          </div>
      </div>
      
    </nav>
  )
}
export default Navbar