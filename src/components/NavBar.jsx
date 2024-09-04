import Image from "next/image";
import logoNav from "../img/WhiteLogo.png"

export const NavBar = () => {
    return (
        <nav className="container text-center py-3 d-none d-lg-block">
            <section className="row">   
                <div className="col my-auto">
                    <a className="nav-link" href="#AboutUs">Nosotros</a>
                </div>
                <div className="col my-auto">
                    <a className="nav-link" href="#Services">Servicios</a>
                </div>
                <div className="col my-auto">
                    <a className="nav-link" href="#Home"><Image className="logo-nav" src={logoNav} alt="Logo de Ramace"/></a>
                </div>
                <div className="col my-auto">
                    <a className="nav-link" href="#AboutMe">Sobre mí</a>
                </div>
                <div className="col my-auto">
                    <a className="nav-link" href="#Locations">Sucursales</a>
                </div> 
            </section>
        </nav>
    )
}