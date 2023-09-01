import { useState } from "react";
export const MoreInfoModal = (props) => {
    const claseModal = (props.mostrar) ? "block" : "none";
    const handleShowMore = () => {
        props.masInfo(props.producto);
    }
    return (
        <>
            <div style={{ display: claseModal }}>
                <div className="modalInfo">
                    <div className="modalInfo-content">
                        <span className="Cerrar-moreInfo" >&times;</span>
                        <h2>{props.producto.title}</h2>
                        <img
                            src={props.producto.urlImage}
                            alt="Imagen del Libro"
                        />
                        <p>costo: ${props.producto.price}</p>
                    </div>
                </div>
            </div>

        </>
    );
}