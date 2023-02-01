

import "./Styles/login.css"

function Login() {
    return (
        <>
        <form class="registro">

                <label>
                    <input placeholder="nombre" type="text" id="nombre" name="nombre"></input>
                </label>

                <label>
                    <input placeholder="email" type="text" id="email" name="email"></input>
                </label>

                <label>
                    <input placeholder="mensaje" type="mensaje" id="mensaje" name="mensaje"></input>
                </label>

                <button type="button" class="button" id="botonRegistrar" >Enviar</button>
            </form>
        </>
    );
}

export default Login; 