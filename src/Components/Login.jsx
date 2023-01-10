
const Login = () => {
    return (
        <>
            <form className="login">
                <h2 id="">REGISTRARSE</h2>

                <label>
                    <input placeholder="name" type="text" id="name" name="name"></input>
                </label>

                <label>
                    <input placeholder="email" type="text" id="email" name="email"></input>
                </label>

                <button type="button" class="button" id="botonLogin" >ENVIAR</button>
            </form>
        </>
    );
};

export default Login; 