import Image from "next/image";
import mujer from "../img/mujer.png"

export const SectionAboutUs = () =>{
    return(
        <section id="AboutUs" className="container-fluid py-5">
            <section className="row justify-content-center">
                <h1 className="text-center">ACUPUNTURA Y ESTÉTICA</h1>
                <h3 className="text-center mb-3">"El inicio de la belleza esta en el bienestar de tu interior"</h3>
                <article className="col-12 col-lg-5 m-auto"> 
                    <h2 className="text-center text-lg-start">Te damos la bienvenida a RAMACE</h2>
                    <hr></hr>
                    <p>Somos un centro de bienestar y belleza dedicado a brindar servicios de calidad en acupuntura y
                                extensiones de pestañas. Nos enorgullece ofrecer terapias
                                naturales y estéticas que promueven el equilibrio, la salud y la belleza integral de nuestros clientes. Con
                                profesionales altamente capacitados y un enfoque personalizado,
                                nos esforzamos por ofrecer una experiencia excepcional y resultados notables.</p>
                    <section className="row justify-content-center">
                        <article className="col-12 col-lg-6">
                            <details>
                                <summary>
                                    Misión
                                    <hr></hr>
                                </summary>
                                    <p>Proporcionar bienestar, aliviar el dolor, reducir el estrés y mejorar su salud en general. Brindando
                                        asesoramiento experto y profesional.
                                        Así como una atención integral y personalizada.<br/>
                                        Realzar la belleza natural de nuestros clientes y resaltar sus características únicas; con nuestras
                                        extensiones de pestañas, lifting facial y limpiezas faciales.
                                        Utilizamos técnicas seguras y de calidad para lograr resultados impresionantes y duraderos.</p>
                            </details>
                        </article>
                        <article className="col-12 col-lg-6">
                            <details>
                                <summary>
                                    Visión
                                    <hr></hr>
                                </summary>
                                        <p>Nos comprometemos a mantener los más altos estándares de calidad en todos nuestros servicios. Utilizamos
                                        productos y equipos de primera calidad,
                                        seguimos prácticas higiénicas rigurosas y nos mantenemos actualizados con las últimas técnicas y avances en
                                        acupuntura médica y estética.</p>
                            </details>
                        </article>
                    </section>
                </article>
                <article className="col-12 col-lg-5 my-auto text-center d-none d-lg-block">
                    <Image className="img-fluid w-50" src={mujer}/>
                </article>
            </section>
        </section>
    );
}