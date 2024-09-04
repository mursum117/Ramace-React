import Image from "next/image"
import vane from "../img/vane.jpg"

export const SectionAboutMe = () =>{
    return (
        <section id="AboutMe"  className="container-fluid py-5">
            <h2>Sobre mí</h2>
            <section className="row justify-content-center my-3">
                <article className="col-12 col-lg-3 mb-5 text-center">
                    <Image className="img-fluid img-aboutme" src={vane} alt="Imagen de Vanessa"/>
                </article>
                <article className="col-12 col-lg-7 my-auto">
                    <h4>Vanessa Yatzbe Copado Cruz</h4>
                    <p>Licenciada en acupuntura humana rehabilitatoria egresada de la UNEVE.<br/>
                            He brindado mis servicios para diferentes clínicas en Estado de México y Ciudad de México.<br/>
                            He participado en exposiciones de bienestar y en programas como Venga la Alegría, dando a conocer la
                            acupuntura y sus diferentes beneficios.
                    </p>
                    <p>Cuento con diplomados en:</p>
                    <ul>
                        <li>Acupuntura abdominal</li>
                        <li>Vendaje neuromuscular</li>
                        <li>Terapias Spa</li>
                    </ul>
                    <p>Certificaciones:</p>
                    <ul>
                        <li>Lashista Profesional</li>
                        <li>Psiconeuroacupuntura </li>
                    </ul>
                    <p>Cedula profesional: <strong>12871295</strong></p>
                </article>
            </section>
        </section>
    )
}