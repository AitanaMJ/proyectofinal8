

import "../Styles/footer.css"
function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="grid-footer">
                    <div>
                        <h3>Redes</h3>
                        <nav>
                            <a href="#">Inicio</a>
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                        </nav>
                    </div>
                        
                    <div>
                        <h3>Sobre Nosotros</h3>
                        <nav>
                            <a href="#">Quienes Somos</a>
                            <a href="#">Galeria</a>
                        </nav>
                    </div>
                
                    <div>
                        <h3>Soporte</h3>
                        <nav>
                            <a href="#">Proyectos</a>
                            <a href="#">Contacto</a>
                        </nav>
                </div>
                </div>
                
            <p><small>&copy; 2022 - Todos los derechos reservados. -</small> <span>Rotaract Club</span> <span>Juan Bautista Alberdi</span></p>
        </footer>
        </>     
    )
}

export default Footer;