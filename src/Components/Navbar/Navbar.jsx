
import '../Styles/navbar.css'
import rotaractLogo from "../../IMG/Rotaract_RGB-EN.png"

const Navbar = () => {
    return (
        <>
            <div className="contenedor__navbar">
                <div className="navbar">
                    <div>
                        <img src={rotaractLogo} alt="" width="150px" ></img>
                    </div>
                    <nav className="navegacion__contenedor">
                        <a className='#seccion1' href="#seccion1">Inicio</a>
                        <a className='enlace' href="#seccion2">¿Quienes Somos?</a>
                        <a className='enlace' href="#seccion3">Proyectos</a>
                        <a className='enlace' href="#seccion4">Contacto</a>
                    </nav>
                    <div>
                        <booton>lol</booton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
