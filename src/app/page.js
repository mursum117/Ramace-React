"use client"

import "../css/ramace.css"
import "../css/normalize.css"

import Image from "next/image"
import logo from "../img/Logo.png"
import mujer from "../img/mujer.png"
import vane from "../img/vane.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavBar } from "@/components/NavBar";
import { NavBarResponsive } from "@/components/NavBarResponsive";
import ImageSlick from "@/components/ImageSlick"
import Iframe from "@/components/IFrames"
import { Footer } from "@/components/Footer";

import { useState, useEffect, useRef } from "react";
import Section from "@/components/Section"


export default function Home() {
  const [scroll, setScrollY] = useState(0);

  useEffect(() => {
    let $iconHome = document.getElementById("linkHome"),
        $iconAboutUs = document.getElementById("linkAboutUs"),
        $iconServices = document.getElementById("linkServices"),
        $iconAboutMe = document.getElementById("linkAboutMe"),
        $iconLocations = document.getElementById("linkLocations");

    const $idHome = document.getElementById("Home").scrollHeight,
          $idAboutUs = document.getElementById("AboutUs").scrollHeight + $idHome,
          $idServices = document.getElementById("Services").scrollHeight + $idAboutUs,
          $idAboutMe = document.getElementById("AboutMe").scrollHeight + $idServices;

    let detectarScroll = () => {
      setScrollY(window.scrollY)

      if(scroll < $idHome){
        $iconHome.classList.add("iconWhite");
        $iconAboutUs.classList.remove("iconWhite");
        $iconServices.classList.remove("iconWhite");
        $iconAboutMe.classList.remove("iconWhite");
        $iconLocations.classList.remove("iconWhite");
      } else if(scroll > $idHome && scroll < $idAboutUs){
        $iconHome.classList.remove("iconWhite");
        $iconAboutUs.classList.add("iconWhite");
        $iconServices.classList.remove("iconWhite");
        $iconAboutMe.classList.remove("iconWhite");
        $iconLocations.classList.remove("iconWhite");
      } else if(scroll > $idAboutUs && scroll < $idServices){
        $iconHome.classList.remove("iconWhite");
        $iconAboutUs.classList.remove("iconWhite");
        $iconServices.classList.add("iconWhite");
        $iconAboutMe.classList.remove("iconWhite");
        $iconLocations.classList.remove("iconWhite");
      } else if(scroll > $idServices && scroll < $idAboutMe){
        $iconHome.classList.remove("iconWhite");
        $iconAboutUs.classList.remove("iconWhite");
        $iconServices.classList.remove("iconWhite");
        $iconAboutMe.classList.add("iconWhite");
        $iconLocations.classList.remove("iconWhite");
      } else{
        $iconHome.classList.remove("iconWhite");
        $iconAboutUs.classList.remove("iconWhite");
        $iconServices.classList.remove("iconWhite");
        $iconAboutMe.classList.remove("iconWhite");
        $iconLocations.classList.add("iconWhite");
      }
    } 

    window.addEventListener("scroll", detectarScroll)

  }, [scroll])


  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settingSlider1 = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    speed: 1000,
  }

  const settingSlider2 = {
    adaptiveHeight: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    dots: false,
  }

  return (
    <>
      <header>
        <NavBar/>
        <NavBarResponsive/>
      </header>
      <main>
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
        <Section id={"Services"} title={"Nuestros Servicios"} className={"row justify-content-around align-items-center"}>
          <div className="col-12 col-lg-4 px-4">
            <Slider className="row slider-images" asNavFor={nav2} ref={slider => (sliderRef1 = slider)} {...settingSlider1}>
              <ImageSlick image={"services.png"} descripcion={"Imagen referencia de servicios"}/>
              <ImageSlick image={"acupuncture.jpg"} descripcion={"Imagen ejemplo de acupuntura"}/>
              <ImageSlick image={"auriculotherapy.jpg"} descripcion={"Imagen ejemplo de auriculoterapia"}/>
              <ImageSlick image={"cleaningear.jpg"} descripcion={"Imagen ejemplo de conoterapia"}/>
              <ImageSlick image={"cuppingmassage.jpg"} descripcion={"Imagen ejemplo de masaje"}/>
              <ImageSlick image={"faciallifting.jpg"} descripcion={"Imagen ejemplo de acupuntura facial"}/>
              <ImageSlick image={"eyelashextension.jpg"} descripcion={"Imagen ejemplo de extesion de pestañasl"}/>
            </Slider>
          </div>
          <div className="col-12 col-lg-6 px-4 my-auto">
            <Slider className="row slider-info mt-5" asNavFor={nav1} ref={slider => (sliderRef2 = slider)} {...settingSlider2}>
              <div className="col my-auto">
                <h4 className="text-center">Descrubre lo que ofrecemos</h4><br></br>
              </div>
              <div className="col">
                <h4>Acupuntura</h4>
                <p className="text-justify text-white">
                    La acupuntura es una técnica milenaria, rama de la Medicina
                    Tradicional China, consiste en la inserciónde agujas muy finas en
                    la piel en puntos estratégicos del cuerpo con el fin de equilibrar
                    el flujo de energía o fuerza vital, conocida como Qi que fluye a
                    través decanales (meridianos) en el cuerpo.
                </p>
              </div>
              <div className="col">
                <h4>Auriculoterapia</h4>
                <p className="text-justify text-white">
                    La auriculoterapia es un tratamiento de la medicina tradicional
                    china asociado con la acupuntura. La oreja es un microsistema el
                    cual estimularemos por medio de puntos específicos para tratar el
                    dolor, o algún padecimiento, equilibrando la energía (QI).
                </p>
              </div>
              <div className="col">
                <h4>Conoterapia</h4>
                <p className="text-justify text-white">
                    Es una práctica para mejorar la salud auditiva y el bienestar
                    general al encender un extremo de una vela hueca y colocar el otro
                    extremo en el canal auditivo, mejorando la audición ya que limpia
                    el conducto auditivo del exceso de cerumen. Desintoxicación de los
                    senosparanasales, mejorando la respiración.
                </p>
              </div>
              <div className="col">
                <h4>Masajes relajantes, descontracturantes y con ventosas</h4>
                <p className="text-justify text-white">
                    El masaje es un método de valoración y tratamiento manual de
                    aquellas partes del cuerpo que presentanalguna dolor o tensión.
                    Los principales beneficios son mejorar el dolor, reducir o
                    eliminar tensiones musculares, mejorar la circulación sanguínea y
                    linfática.
                </p>
              </div>
              <div className="col">
                <h4>Limpieza y lifting con acupuntura facial</h4>
                <p className="text-justify text-white">
                    Practicas estéticas que nos ayudaran contra la oxidación de la
                    aparición de líneas de expresión en el cutis facial, reafirmar la
                    piel y darle luminosidad al rostro.
                </p>
              </div>
              <div className="col">
                <h4>Extensiones de pestañas</h4>
                <p className="text-center text-white">
                    Manejamos diferentes técnicas:<br></br>
                </p>
                <ul className="text-white">
                  <li>
                    <strong>Clásicas</strong>
                  </li>
                  <li>
                    <strong>Efecto rímel u efecto mojado</strong>
                  </li>
                  <li>
                    <strong>Volumen o técnica rusa</strong>
                  </li>
                  <li>
                    <strong>Hibridas</strong>
                  </li>
                  </ul>
                </div>
            </Slider>
          </div>
        </Section>
        <Section id={"AboutMe"} title={"Sobre mí"} className={"row my-3 justify-content-center"}>
          <article className="col-12 col-lg-3 mb-5 my-lg-auto text-center">
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
        </Section>
        <Section id={"Locations"} title={"Nuestras Sucursales"} className={"row my-3 justify-content-around"}>
          <article className="col-12 col-lg-5 my-3">
            <h4>Ciudad de México</h4>
            <Iframe 
              source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.390686332411!2d-99.15577912408818!3d19.395518541862742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff04e80b169d%3A0x632a20cd2c6e8bb3!2sXola%201413%2C%20Narvarte%20Poniente%2C%20Benito%20Ju%C3%A1rez%2C%2003020%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1689038798851!5m2!1ses-419!2smx"} 
            />
            <p className="text-center text-white">Xola 1413, Narvarte Poniente, <br/> Benito Juárez, 03020 Ciudad de México, CDMX</p>
          </article>
          <article className="col-12 col-lg-5 my-3">
            <h4>Estado de México</h4>
            <Iframe 
              source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.7237130515614!2d-99.037281124115!3d19.596333935430145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f1c75e972e95%3A0xb6ab1cf8cedc8f8e!2sAv%20Norte%203%2C%20Hogares%20Mexicanos%2C%2055040%20Ecatepec%20de%20Morelos%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1689917079805!5m2!1ses-419!2smx"} 
            />
            <p className="text-center text-white">Avenida norte 3, Hogares Mexicanos, <br/>Ecatepec de Morelos.</p>
          </article>
        </Section>
      </main>
      <Footer/>
    </>
  );
}
