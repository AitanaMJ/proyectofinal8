
import "../../Styles/seccion1.css"
import iconoCiudad from "../../../IMG/iconoCiudad.png";
import iconoPlaneta from "../../../IMG/iconoPlaneta.png";
import iconoPersonas from "../../../IMG/iconoCultura.png";

const Seccion1 = () => {
    return (
        <>
            <div className="container__seccion1" id="seccion1">
                <div className="seccion1">
                    <div className="titulo__seccion1">
                        <h1>HAS QUE EL MUNDO SEA DISTINOTO</h1>
                        <h2>un pequeño cambio hace la diferencia</h2>
                    </div>
                    <div className="contenido__seccion1">
                        <figure className="imagen__seccion1">
                            <img src={iconoCiudad} alt="icono de una ciudad" width="60px"></img>
                        </figure>
                        <h3>limpia tu ciudad</h3>

                        <figure className="imagen__seccion1">
                            <img src={iconoPlaneta} alt="icono de cultura" width="60px"></img>
                        </figure>
                        <h3>cuida tu cultura</h3>

                        <figure className="imagen__seccion1">
                            <img src={iconoPersonas} alt="icono de inclusion" width="60px"></img>
                        </figure>
                        <h3>ayuda a los demas</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Seccion1; 