/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { type } from "os";

type HeaderProps = {setAccessToken(s:string): void}


export const Header : NextPage<HeaderProps> = ({setAccessToken}) => {

    const mobile = window.innerWidth < 954;
    const userName = localStorage.getItem('name');
    const firstName = userName?.split('')[0] || 'Sem Nome'

    const sair = () => {
        localStorage.clear();
        setAccessToken('');
    }
    return(
        <div className="container-header">
              <img src="logo.svg" alt="Logo Fiap" className='logo'/>
              <button><strong>Adicionar tarefa</strong>
              <div>
                <span>Olá.......</span>
              </div></button>
              <img src={mobile ? 'exit-mobile.svg' : 'exit-destop.svg'}  alt= "Sair"/>
        </div>
    )
}