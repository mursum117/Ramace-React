"use client"

import "../css/ramace.css"
import "../css/normalize.css"
import { NavBar } from "@/components/NavBar";
import { NavBarResponsive } from "@/components/NavBarResponsive";
import { SectionAboutUs } from "@/components/SectionAboutUs";
import { SectionServices } from "@/components/SectionServices";
import { SectionAboutMe } from "@/components/SectionAboutMe";
import { SectionLocations } from "@/components/SectionLocations";
import { Footer } from "@/components/Footer";
import { SectionHomeResponsive } from "@/components/SectionHomeResponsive";
import { useState, useEffect } from "react";

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

  return (
    <>
      <header>
        <NavBar/>
        <NavBarResponsive/>
      </header>
      <main>
        <SectionHomeResponsive/>
        <SectionAboutUs/>
        <SectionServices/>
        <SectionAboutMe/>
        <SectionLocations/>
      </main>
      <Footer/>
    </>
  );
}
