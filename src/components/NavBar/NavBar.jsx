
import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img className="navbar-brand-img" src="https://media.licdn.com/dms/image/C560BAQEuUFkXaNspLQ/company-logo_200_200/0/1638368281752/fharoapp_logo?e=2147483647&v=beta&t=oujYRaS2SpEA1viYierZ3LXmEdD6W0ha3Lll8GcpY5M"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cursos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mentorías</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Serv. de Consultoría</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Blog</a>
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