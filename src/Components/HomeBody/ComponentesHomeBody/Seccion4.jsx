
import Login from "../../Login"
import "../../Styles/seccion4.css"

const Seccion4 = () => {
    return (
        <>
            <div className="container__seccion4" id="seccion4">
                <div className="seccion4">
                    <div className="contenido__seccion4">
                        <h2>CONTACTANOS</h2>
                        <p>
                            Envianos tus ideas de proyectos para que podamos presentarlas en la mesa de trabajo de nuestras próximas reuniones. <br></br>
                            Para hacerlo simplemente rellena los campos con tus datos y dejanos un comentario o envianos un E-mail con tu propuesta en formato PDF.<br></br>
                            Recuerda que un gran cambio empieza por uno pequeño y vos podes formar parte. ¡no te quedes afuera!. :D
                        </p>
                    </div>
                    <div className="login__seccion4" >
                        <Login />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Seccion4; 