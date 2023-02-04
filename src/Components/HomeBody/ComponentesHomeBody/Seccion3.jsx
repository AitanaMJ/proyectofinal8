
import "../../Styles/seccion3.css"
import foto1 from "../../../IMG/colectaDeTapitas.jpeg"
import foto2 from "../../../IMG/prevencionDelCancerDeMama.jpg"
import foto3 from "../../../IMG/imgwichi22.jpeg"



const Seccion5 = () => {
    return (
        <>
            <div className="container__seccion3" id="seccion3">
                <div className="seccion3">
                    <div className="container__texto">
                        <h2>ECHA UN VISTASO A NUESTROS PROYECTOS</h2>
                        <p>Estos son algunos de los proyectos que realizamos de concientización,
                            limpieza, recolección de donaciones y otros objetivos dirigidos a las personas de todas
                            las edades para la mejora de nuestra ciudad y su gente</p>
                    </div>
                    <div className="container__card">
                        <div className="card">
                            <div className="front face">
                                <img src={foto1} alt="" width="300px" ></img>
                                <a href="https://www.instagram.com/p/CUh7sqSJ0pa">Recoleccion de tapitas</a>
                            </div>
                            <div className="back face">
                                <h3>Proyecto Corazon</h3>
                                <p>
                                    Reciclaje y Reutilizacion no son los unicos que nos estan salvando. Las Tapitas que eran basura, ahora se han convertido en recursos y tratamientos para niños con diagnostico de cancer y donarlos significa dar la oportunidad a otros de seguir viviendo.
                                </p>
                                <div>
                                    <a href="https://www.instagram.com/p/CUh7sqSJ0pa" target="_blank">ver mas</a>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="front face">
                                <img src={foto2} alt="" width="300px"></img>
                                <a href="https://www.instagram.com/p/Cjv5bFLJafs">Prevencion del Cancer de mama</a>
                            </div>
                            <div className="back face">
                                <h3>Proyecto Concientizacion</h3>
                                <p>
                                 Trabajamos fuertemente en la difusión del mamógrafo con el que cuenta nuestro hospital, para que más personas hagan sus controles anuales.
                                </p>
                                <div>
                                    <a href="https://www.instagram.com/p/Cjv5bFLJafs" target="_blank">ver mas</a>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="front face">
                                <img src={foto3} alt="ComunidadWichi" width="300px" ></img>
                                <a href="#">Viaje a las Comunidades Wichi</a>
                            </div>
                            <div className="back face">
                                <h3>Proyecto Comunidad Wichi</h3>
                                <p>
                                    Viajamos aproximadamente 1600km para ser las manos que entreguen las donaciones que nos confiaron y encomendaron entregar a quienes más las necesitan.
                                </p>
                                <div>
                                    <a href="#">ver mas</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Seccion5; 