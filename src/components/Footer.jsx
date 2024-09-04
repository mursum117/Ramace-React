import Image from "next/image"
import whiteLogo from "../img/WhiteLogo.png"

export const Footer  = () => {
    return (
        <footer>
            <section className="container-fluid text-center">
                <section className="row">
                    <div className="col-12 col-lg-4 my-auto py-3">
                        <p className="white-text"><strong>Horarios de atención:</strong><br/><br/>
                            Lunes a viernes de <strong>8 A.M</strong> a <strong>8 P.M</strong><br/>
                            Sábados de <strong>9 A.M</strong> a <strong>3 P.M</strong>
                        </p>
                    </div>
                    <div className="col-12 col-lg-4 my-auto py-3">
                        <Image className="img-fluid" src={whiteLogo} alt="Logo en blanco"/>
                    </div>
                    <div className="col-12 col-lg-4 my-auto py-3">
                        <section className="container-fluid">
                            <section className="row">
                                <div className="col">
                                    <a href="https://www.instagram.com/ramace_acupuntura/" target="_blank"><i className="fa fa-instagram"></i></a>
                                </div>
                                <div className="col">
                                    <a href="https://www.facebook.com/RamaceAcupuntura" target="_blank"><i className="fa fa-facebook"></i></a>
                                </div>
                                <div className="col">
                                    <a href="https://wa.me/525535789092" target="_blank"><i className="fa fa-whatsapp"></i></a>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>
                <hr/>
                <p className="white-text py-2">©Copyright</p>
            </section>
        </footer>
    )
}