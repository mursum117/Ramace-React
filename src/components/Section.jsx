export default function Section ({id, title, className, children}){
    return(
        <section id={id} className="container-fluid py-5">
            <h2>{title}</h2>
            <div className={className}>
                {children}
            </div>
        </section>
    )
}