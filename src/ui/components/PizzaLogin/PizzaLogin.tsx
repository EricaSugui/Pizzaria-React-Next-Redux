import Image from "next/image";
import margerita from '/public/img/margerita.png'
import style from './PizzaLogin.module.css'
import { useState } from "react";

const Form = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    const handleChange = () => {

    }
    const handleSubmit = () => {

    }
    return (
        <form className={style['pizza-form']} onSubmit={handleSubmit}>
            <input
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={state.email}
                required
            />
            <input
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
                required
            />
            <button className={style['pizza-submit']} type="submit">Send</button>
        </form>
    )
}

export default function PizzaLogin(){
    return <div className={style['pizza-container']}>
        <div className={style['pizza-logo']}>
            <Image src={margerita} alt="logo" />
            <h1>Pizzaria React</h1>
        </div>
        <div className={style['pizza-login']}>
            <Form />
        </div>

    </div>
}