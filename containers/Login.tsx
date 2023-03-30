/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

export const Login = () => {

    const [login, setLogin] = useState('');
    
    return (
        <div className="container-login">
            <img src="logo.svg" alt="Logo Fiap" className='logo' />
            <div className="form">
                <div className="input">
                    <img src="mail.svg" alt="Login"/>
                    <input placeholder="Login"/>
                </div>

                <div className="input">
                    <img src="lock.svg" alt="Senha"/>
                    <input placeholder="Senha"/>
                </div>

                <button>Entrar</button>
            </div>
        </div>
    );
}