
export default function Navbar(){
  return(
    <>
        <header>
            <ul id="navbar">
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="../pages/buscar.html">Buscar</a></li>
                <li><a href="../pages/categoria.html">Explorar por categoria</a></li>
                <li><a href="../pages/likes.html">Tus me gusta</a></li>
                <li><a href="../pages/perfil.html">Tu perfil</a></li>
                <li><a href="../pages/configuracion.html">Configuracion</a></li>
                <a onclick="cleanLibrary()">Limpiar biblioteca</a>
            </ul>
        </header>
    </>
  )  
}



