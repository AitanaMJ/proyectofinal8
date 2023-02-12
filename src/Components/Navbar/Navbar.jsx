
import '../Styles/navbar.css'
import rotaractLogo from "../../IMG/Rotaract_RGB-EN.png"

const Navbar = () => {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <img src={rotaractLogo} class="navbar-brand" width="150px"></img>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="#header">Inicio</a>
                                <a class="nav-link" href="#seccion2">¿Quienes somos?</a>
                                <a class="nav-link" href="#seccion3">Proyectos</a>
                                <a class="nav-link" href="#seccion4">Ccontacto</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
