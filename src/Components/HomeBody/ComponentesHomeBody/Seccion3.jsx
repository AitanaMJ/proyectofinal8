
import "../../Styles/seccion3.css"
import foto1 from "../../../IMG/colectaDeTapitas.jpeg"
import foto2 from "../../../IMG/prevencionDelCancerDeMama.jpg"
import foto3 from "../../../IMG/imgwichi222.jpeg"



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
                    <div className="container__cards">
                        <div>
                            <div class="card" >
                                <img src={foto1} class="card-img-top" width="400px" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Recoleccion de tapitas</h5>
                                    <p class="card-text">Las Tapitas que eran basura, ahora se han convertido en recursos y tratamientos para niños con diagnostico de cancer y donarlos significa dar la oportunidad a otros de seguir viviendo.</p>
                                    <a href="https://www.instagram.com/p/CUh7sqSJ0pa" class="btn btn-primary">ver mas</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card" >
                                <img src={foto2} class="card-img-top" width="400px" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Prevencion del Cancer de mama</h5>
                                    <p class="card-text">Trabajamos fuertemente en la difusión del mamógrafo con el que cuenta nuestro hospital, para que más personas hagan sus controles anuales.</p>
                                    <a href="https://www.instagram.com/p/Cjv5bFLJafs" class="btn btn-primary">ver mas</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card" >
                                <img src={foto3} class="card-img-top" width="400px" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Viaje a las Comunidades Wichi</h5>
                                    <p class="card-text">Viajamos aproximadamente 1600km para ser las manos que entreguen las donaciones que nos confiaron y encomendaron entregar a quienes más las necesitan.</p>
                                    <a href="#" class="btn btn-primary">ver mas</a>
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