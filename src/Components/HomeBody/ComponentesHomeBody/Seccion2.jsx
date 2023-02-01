

import "../../Styles/seccion2.css"
import fotoDePresentacion from "../../../IMG/fotoDePresentacion.jpg"
import fotoDePresentacion2 from "../../../IMG/fotoDePresentacion2.jpg"
import fotoDePresentacion3 from "../../../IMG/fotoDePresentacion3.jpeg"

const Seccion2 = () => {
    return (
        <>
            <div className="container__seccion2">
                <div className="seccion2">
                    <div className="imagen__seccion2">
                        <figure>
                            <img src={fotoDePresentacion} alt="integrantes de la asociacion" width="410px"></img>
                        </figure>
                        <div className="imagen2__imagen3__seccion2">
                            <figure>
                                <img src={fotoDePresentacion2} alt="integrantes de la asociacion" width="200px"></img>
                            </figure>
                            <figure>
                                <img src={fotoDePresentacion3} alt="integrantes de la asociacion" width="200px"></img>
                            </figure>
                        </div>
                    </div>
                    <div className="contenido__seccion2">
                        <div className="titulo__seccion2">
                            <h2>¿QUIENES SOMOS?</h2>
                        </div>
                        <div className="texto__seccion2">
                            <p>
                                Somos una organización sin fines de lucro, dedicada a brindar servicios a la comunidad mediante
                                la propuesta de ideas, planificación y ejecución de diversos proyectos desarrollados
                                para ayudar y manifestar los valores que se practican en nuestro club.
                            </p>
                            <br></br>
                            <p>
                                Ayudamos a nuestros miembros a desarrollar habilidades tales como: el liderazgo, habilidades sociales,
                                correcta planificación y ejecución de proyectos, etc...
                                Además de fomentar la amistad y el trabajo en equipo para lograr los objetivos fijados y crecer como personas.
                            </p>
                            <br></br>
                            <p>
                                Somos y formamos AGENTES DE CAMBIO.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Seccion2; 