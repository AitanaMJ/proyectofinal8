
import "../../Styles/seccion3.css"
import foto1 from "../../../IMG/colectaDeTapitas.jpeg"
import foto2 from "../../../IMG/prevencionDelCancerDeMama.jpg"

const Seccion5 = () => {
    return (
        <>
            <div className="container__seccion3">
                <div className="seccion3">
                    <div className="container__texto">
                        <h2>HECHA UN VISTASO A NUESTROS PROYECTOS</h2>
                        <p>Estos son algunos de los proyectos que realizamos de concientización,
                            limpieza, recolección de donaciones y otros objetivos dirigidos a las personas de todas
                            las edades para la mejora de nuestra ciudad y su gente</p>
                    </div>
                    <div className="container__card">
                        <div className="card">
                            <div className="front face">
                                <img src={foto1} alt="" width="300px" ></img>
                                <h3>Recoleccion de tapitas</h3>
                            </div>
                            <div className="back face">
                                <h3>texto</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Mollitia, tenetur sint in dolor corrupti magni,
                                    veritatis obcaecati dolores laboriosam possimus,
                                    dicta error facere consequuntur. Repudiandae?
                                </p>
                                <div>
                                    <a href="#">ver mas</a>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="front face">
                                <img src={foto2} alt="" width="300px"></img>
                                <h3>Prevencion del cancer de mama</h3>
                            </div>
                            <div className="back face">
                                <h3>texto</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Mollitia, tenetur sint in dolor corrupti magni,
                                    veritatis obcaecati dolores laboriosam possimus,
                                    dicta error facere consequuntur. Repudiandae?
                                </p>
                                <div>
                                    <a href="#">ver mas</a>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="front face">
                                <img src={foto1} alt="" width="300px" ></img>
                                <h3>texto</h3>
                            </div>
                            <div className="back face">
                                <h3>texto</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Mollitia, tenetur sint in dolor corrupti magni,
                                    veritatis obcaecati dolores laboriosam possimus,
                                    dicta error facere consequuntur. Repudiandae?
                                </p>
                                <div>
                                    <a href="#">ver mas</a>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="front face">
                                <img src={foto1} alt="" width="300px"></img>
                                <h3>texto</h3>
                            </div>
                            <div className="back face">
                                <h3>texto</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Mollitia, tenetur sint in dolor corrupti magni,
                                    veritatis obcaecati dolores laboriosam possimus,
                                    dicta error facere consequuntur. Repudiandae?
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