import { Link } from "react-router-dom";


export default function Navbar(){
  return(
    <>
        <header>
            <ul id="navbar">
                <li><Link to="/" >Inicio</Link></li>
                <li><Link to="/search" href="../pages/buscar.html">Search</Link></li>
                <li><Link to="/categories" href="../pages/categoria.html">Explorar por categoria</Link></li>
                <li><Link to="/likes" href="../pages/likes.html">Tus me gusta</Link></li>
                <li><Link to="/profile" href="../pages/perfil.html">Tu perfil</Link></li>
                <li><Link to="/settings" href="../pages/configuracion.html">Configuracion</Link></li>
                {/* <Link to={} onclick="cleanLibrary()">Limpiar biblioteca</Link> */}
            </ul>
        </header>
    </>
  )  
}



