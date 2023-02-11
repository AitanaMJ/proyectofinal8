import { useState } from "react";
import { message } from "../service/apiCall";
import "./Styles/login.css";

const Message = () => {

    const [formValues, setformValues] = useState({
        firstname: "",
        email: "",
        message: ""
    });

    const handleChange = (event) => {
        setformValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const registerMessage = () => {
            message(formValues).then(() => {
                alert("mensaje enviado");
            }).catch((error) => alert("error al enviar mensaje"));
        }
        registerMessage();
    }

    return (
        <>
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
                    <input placeholder="mensaje"
                        type="text"
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                        required>

                    </input>
                </label>
                <div>
                    <button>Enviar</button>
                </div>
            </form>
        </>
    );
}

export default Message; 