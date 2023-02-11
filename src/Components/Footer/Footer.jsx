

import "../Styles/footer.css"
function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="grid-footer">
                    <div>
                        <h3>Redes</h3>
                        <nav>
                            <a href="#header">Inicio</a>
                            <a href="https://www.instagram.com/rotaract.jbalberdi/" target="_blank">Instagram</a>
                            <a href="https://www.facebook.com/rotaractclubjbalberdi" target="_blank">Facebook</a>
                        </nav>
                    </div>
                        
                    <div>
                        <h3>Sobre Nosotros</h3>
                        <nav>
                            <a href="#seccion2">Quienes Somos</a>
                            <a href="#seccion3">Proyectos</a>
                            <a href="#seccion4">Contactanos</a>
                        </nav>
                    </div>
                
                    <div>
                        <h3>Soporte</h3>
                        <nav>
                            <p>rotaractclub.jba@gmail.com</p>
                        </nav>
                </div>
                </div>
                
            <p><small>&copy; 2022 - Todos los derechos reservados. -</small> <span>Rotaract Club</span> <span>Juan Bautista Alberdi</span></p>
        </footer>
        </>     
    )
}

export default Footer;