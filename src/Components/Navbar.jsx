import "../StylesCSS/Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logotipo">
                    <a href=".logo">Logo</a>
                </div>
                <nav className="BotonesDeNavegacion">
                    <a href=".logo">HOME</a>
                    <a href=".logo">LOGIN</a>
                    <a href=".logo">HELP</a>
                    <a href=".logo">CONTACTUS</a>
                </nav>
                <div className="BotonesAdicionales">
                    <a href=".logo">CARRITO</a>
                    <a href=".logo">buscador</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;
