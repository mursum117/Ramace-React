export const SectionLocations = () => {
    return(
        <section id="Locations" className="container-fluid py-5">
            <h2>Nuestras Sucursales</h2>
            <section className="row my-3 justify-content-around">
                <article className="col-12 col-lg-5 my-3">
                    <h4>Ciudad de México</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.390686332411!2d-99.15577912408818!3d19.395518541862742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff04e80b169d%3A0x632a20cd2c6e8bb3!2sXola%201413%2C%20Narvarte%20Poniente%2C%20Benito%20Ju%C3%A1rez%2C%2003020%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1689038798851!5m2!1ses-419!2smx"
                        style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <p className="text-center text-white">Xola 1413, Narvarte Poniente, <br/>
                            Benito Juárez, 03020 Ciudad de México, CDMX</p>
                </article>
                <article className="col-12 col-lg-5 my-3">
                    <h4>Estado de México</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.7237130515614!2d-99.037281124115!3d19.596333935430145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f1c75e972e95%3A0xb6ab1cf8cedc8f8e!2sAv%20Norte%203%2C%20Hogares%20Mexicanos%2C%2055040%20Ecatepec%20de%20Morelos%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1689917079805!5m2!1ses-419!2smx"
                        style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <p className="text-center text-white">Avenida norte 3, Hogares Mexicanos, <br/>
                            Ecatepec de Morelos.</p>
                </article>
            </section>
        </section>
    )
}