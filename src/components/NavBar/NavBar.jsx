import CartWidget from "./CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <Link to="/" className="navbar-brand">
        <img className="navbar-brand-img" src="https://media.licdn.com/dms/image/C560BAQEuUFkXaNspLQ/company-logo_200_200/0/1638368281752/fharoapp_logo?e=2147483647&v=beta&t=oujYRaS2SpEA1viYierZ3LXmEdD6W0ha3Lll8GcpY5M"/>
    </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <Link to="/category/cursos" className="nav-link">Cursos</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/mentorias" className="nav-link">Mentorías</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/consultorias" className="nav-link">Serv. de Consultorías</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/blog" className="nav-link">Blog</Link>
        </li>
        </ul>
        <div className="cart-widget-container">
          <CartWidget/>
        </div>
    </div>

  </div>
</nav>
    )
}

export default NavBar