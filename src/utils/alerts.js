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