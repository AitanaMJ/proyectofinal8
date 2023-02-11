import { useState } from "react";
import { login } from "../service/apiCall";
import "./Styles/login.css";

const LogIn = () => {

    const [formValues, setformValues] = useState({
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
        const loginUser = () => {
            login(formValues).then(() => {
                alert("vienvenido")
            }).catch((error) => alert("usuario no encontrado"));
        }
        loginUser();
    }

    return (
        <>
            <div className="container__login">
                <h3>ingresar</h3>
                <form className="registro" onSubmit={handleSubmit}>

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

export default LogIn; 