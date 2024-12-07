import React from "react";
import "./Footer.css"; 

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Información de la empresa */}
                    <div className="col-md-6 text-center text-md-start">
                        <h5 className="footer-title">Tienda Lulú</h5>
                        <p className="footer-text">Ofrecemos productos capilares de calidad a precios increíbles. ¡Gracias por visitarnos!</p>
                    </div>

                    {/* Redes sociales */}
                    <div className="col-md-6 text-center text-md-end">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-3">
                            <h5 className="footer-title m-0">Síguenos en</h5>
                            <div className="social-icons">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" >
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"className="social-link" >
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="footer-copy">
                            © {new Date().getFullYear()} Tienda Lulú. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}