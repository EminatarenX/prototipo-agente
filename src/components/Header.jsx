import "../styles/header.css"
import SliderBanner from "./SliderBanner"
import { useState } from "react"

export default function Header() {
    const [aside, setAside] = useState(false)

    const handleAside = () => {
        setAside(!aside)
    }

    return (
        <>
            <div className="banner">
                <SliderBanner />
                <SliderBanner />
            </div>
            <header className='header'>
                <div className="titulo">

                    <h1>Agente</h1>
                    <div className="titulo-icono">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                    </div>
                </div>
                <button onClick={handleAside} className={`nav-boton ${aside && "cambio-text-blanco"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </button>
                {
                    aside && (
                        <nav className={`navegacion `}>
                            <ul className='nav-lista'>
                                <li>
                                    <a>Datos del Agente</a>
                                    <div></div>
                                </li>
                                <li >
                                    <a>Otras propuestas</a>
                                    <div></div>
                                </li>
                                <li >
                                    <a>Mis logros</a>
                                </li>
                            </ul>
                        </nav>
                    )
                }
            </header>
        </>
    )
}
