import Image from "next/image";

export default function ImageSlick({image, descripcion}){
    return(
        <div className="col position-relative">
            <Image className="img-fluid img-services position-relative" src={`/${image}`} alt={descripcion} fill/>
        </div>
    );
} 