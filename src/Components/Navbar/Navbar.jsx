
import '../Styles/navbar.css'


const Navbar = () => {
    return (
        <>
            <div className='contenedor__navbar'>
                <div className="navbar">
                    <nav className="navegacionprin contenedor">
                        <a className='#seccion1' href=".logo">Inicio</a>
                        <a className='enlace' href=".logo">¿Quienes Somos?</a>
                        <a className='enlace' href=".logo">Proyectos</a>
                        <a className='enlace' href=".logo">Contacto</a>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar;
