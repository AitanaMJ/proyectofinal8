import { useState } from "react";
import { register } from "../service/apiCall";
import "./Styles/login.css";

const Register = () => {

    const [formValues, setformValues] = useState({
        firstname: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setformValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const registerUser = () => {
            register(formValues).then(() => {
                console.log("usuario registrado")
            }).catch((error) => alert("error al registrar usuario"));
        }
        registerUser();
    }

    return (
        <>
            <div className="container__register">
                <h3>registrarse</h3>
                <form className="registro" onSubmit={handleSubmit}>
                    <label>
                        <input
                            placeholder="nombre"
                            type="text"
                            name="firstname"
                            value={formValues.firstname}
                            onChange={handleChange}
                            required>
                        </input>
                    </label>

                    <label>
                        <input
                            placeholder="ejemplo@ejeplo.com.ar"
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            required>
                        </input>
                    </label>

                    <label>
                        <input placeholder="contraseña"
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                            required>

                        </input>
                    </label>
                    <div>
                        <button>Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register; 