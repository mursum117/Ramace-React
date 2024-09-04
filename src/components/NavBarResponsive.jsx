"use client";

import { useEffect } from "react";

export const NavBarResponsive = () => {

    useEffect(() => {
        let $linkHome = document.getElementById("linkHome"),
            $linkAboutUs = document.getElementById("linkAboutUs"),
            $linkServices = document.getElementById("linkServices"),
            $linkAboutMe = document.getElementById("linkAboutMe"),
            $linkLocations = document.getElementById("linkLocations");

        $linkHome.addEventListener("click", (e)=>{
           if(!$linkHome.classList[2]) $linkHome.classList.add("iconWhite");
        });

        $linkAboutUs.addEventListener("click", (e)=>{
            if(!$linkAboutUs.classList[2]) $linkAboutUs.classList.add("iconWhite");
         });

         $linkServices.addEventListener("click", (e)=>{
            if(!$linkServices.classList[2]) $linkServices.classList.add("iconWhite");
         });

         $linkAboutMe.addEventListener("click", (e)=>{
            if(!$linkAboutMe.classList[2]) $linkAboutMe.classList.add("iconWhite");
         });

         $linkLocations.addEventListener("click", (e)=>{
            if(!$linkLocations.classList[2]) $linkLocations.classList.add("iconWhite");
         });
         
    }, [])
    

    return (
        <nav className="container-fluid d-block d-lg-none py-3 navbarResponsive">
            <div className="row">
                <div className="col text-center">
                    <a id="linkHome" className="nav-link-responsive iconWhite" href="#Start"><i className="fas fa-home"></i></a>
                </div>
                <div className="col text-center">
                    <a id="linkAboutUs" className="nav-link-responsive" href="#AboutUs"><i className="fa-solid fa-people-group"></i></a>
                </div>
                <div className="col text-center">
                    <a id="linkServices" className="nav-link-responsive" href="#Services"><i className="fas fa-hand-holding-medical"></i></a>
                </div>
                <div className="col text-center">
                    <a id="linkAboutMe" className="nav-link-responsive" href="#AboutMe"><i className="fa fa-address-card"></i></a>
                </div>
                <div className="col text-center">
                    <a id="linkLocations" className="nav-link-responsive" href="#Locations"><i className="fa fa-map-marker"></i></a>
                </div>
            </div>
        </nav>
    )
}