"use client";

import Image from "next/image";
import services from "../img/services.png";
import acupuntura from "../img/acupuncture.jpg";
import auriculoterapia from "../img/auriculotherapy.jpg";
import conoterapia from "../img/cleaningear.jpg";
import masaje from "../img/cuppingmasage.jpg";
import facial from "../img/faciallifting.jpg"
import pestanias from "../img/eyelashextension.jpg";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const SectionServices = () => {
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
    <section id="Services" className="container-fluid py-5">
      <h2 >Nuestros servicios</h2>
      <div className="row justify-content-around align-items-center">
        <div className="col-12 col-lg-4 px-4">
        <Slider className="row slider-images" asNavFor={nav2} ref={slider => (sliderRef1 = slider)} {...settingSlider1}>
          <div className="col d-grid align-items-center justify-content-center">
            <Image className="img-fluid img-services" src={services} alt="Imagen referencia de servicios"/>
          </div>
          <div className="col d-grid align-items-center justify-content-center">
            <Image className="img-fluid img-services" src={acupuntura} alt="Imagen ejemplo de acupuntura"/>
          </div>
          <div className="col d-grid align-items-center justify-content-center">
            <Image className="img-fluid img-services" src={auriculoterapia} alt="Imagen ejemplo de auriculoterapia"/>
          </div>
          <div className="col d-grid align-items-center justify-content-center">
            <Image className="img-fluid img-services" src={conoterapia} alt="Imagen ejemplo de conoterapia"/>
          </div>
          <div className="col d-grid align-items-center justify-content-center">
            <Image className="img-fluid img-services" src={masaje} alt="Imagen ejemplo de masaje"/>
          </div>
          <div className="col d-grid align-items-center justify-content-center">
            <Image className="img-fluid img-services" src={facial} alt="Imagen ejemplo de acupuntura facial"/>
          </div>
          <div className="col d-grid align-items-center justify-content-center">
            <Image className="img-fluid img-services" src={pestanias} alt="Imagen ejemplo de extesion de pestañas"/>
          </div>
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
                    <p>
                      <strong>Clásicas</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Efecto rímel u efecto mojado</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Volumen o técnica rusa</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Hibridas</strong>
                    </p>
                  </li>
              </ul>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
