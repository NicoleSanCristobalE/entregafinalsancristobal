import Swal from "sweetalert2";

export const alertInfo = (icono, titulo, texto) => {
    Swal.fire({
        icon: icono,
        title: titulo,
        text: texto,
    });
};

export const alertDecision = (titulo, texto) => {
    Swal.fire({
        icon: "question",
        title: titulo,
        text: texto,
        showCancelButton: true,
        confirmButtonColor: "",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí",
        cancelButtonText: "No"
    }).then((result) => {
        return result.isConfirmed;
    });
};

export const alertAutoDismiss = (texto) => {
    Swal.fire({
        text: texto,
        timer: 2000, 
        timerProgressBar: true,
        showConfirmButton: false, 
        position: "top-end", 
        width: 20,
        toast: true, 
    });
};