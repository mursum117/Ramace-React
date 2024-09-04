import Image from "next/image"
import logo from "../img/Logo.png"

export const SectionHomeResponsive = () =>{
    return(
        <div id="Start">
            <section className="container-fluid text-center d-block d-lg-none my-3">
                <div className="row">
                    <div className="col">
                        <Image className="img-fluid w-25" src={logo} alt="Logo de Ramace"/>
                    </div>
                </div>
            </section>
            <section id="Home" className="container-fluid d-block d-lg-none">
                <h1 className="text-white">ACUPUNTURA Y ESTÉTICA</h1>
                <h3 className="text-white">"El inicio de la belleza esta en el bienestar de tu interior"</h3>
            </section>
        </div>
    );
}