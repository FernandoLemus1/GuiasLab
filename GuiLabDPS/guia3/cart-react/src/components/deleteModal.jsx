import { useState } from "react";

export const DeleteModal = (props) => {

    const claseModal = (props.mostrar) ? "block" : "none";
    const [mostrarConfirmacion,setMostrarConfirmacion]=useState(false);
    const handleDeleteProduct = () => {
        props.eliminarProducto(props.producto);
        props.cerrarModal();
        setMostrarConfirmacion(true);
        setTimeout(()=>{setMostrarConfirmacion(false);},3000)
    }
  

    return (
        <>
            <div style={{ display: claseModal }}>
                <div id="modalEliminar"
                    className="modal"
                >

                    <div className="modal-content">

                        <h4>
                            Eliminar producto
                        </h4>
                        <p>
                            ¿Desea eliminar  {props.producto.title}?
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button onClick={() => { handleDeleteProduct() }} >Eliminar </button>
                            <button onClick={props.cerrarModal}>Cancelar</button>
                        </div>
                    </div>

                </div>
            </div>
            {mostrarConfirmacion && (
                <div className="confirmacion">
                    elemento eliminado
                </div>
            )}
        </>


    );
}
