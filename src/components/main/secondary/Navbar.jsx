import { Link } from "react-router-dom";


export default function Navbar(){
  return(
      <header>
          <ul id="navbar">
              <li><Link to="/" >Inicio</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/categories">Explorar por categoria</Link></li>
              <li><Link to="/likes">Tus me gusta</Link></li>
              <li><Link to="/profile">Tu perfil</Link></li>
              <li><Link to="/settings">Configuracion</Link></li>
              {/* <Link to={} onclick="cleanLibrary()">Limpiar biblioteca</Link> */}
          </ul>
      </header>
  )  
}



