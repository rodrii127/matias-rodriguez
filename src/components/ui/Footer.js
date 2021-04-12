import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section   className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://m.facebook.com/drrodriguezmatias/?ref=bookmarks" target="_blank" role="button"><i   className="bi bi-facebook"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/matiSR444" target='_blank' role="button"><i   className="bi bi-twitter"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="matias_rodriguez444@hotmail.com" target='_blank' role="button"><i   className="bi bi-google"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/drrodriguezmatias/" target='_blank' role="button"><i   className="bi bi-instagram"></i></a>
                </section>

            </div>
            <div className="text-center p-3 footer-copyright-text">
                © 2021 Copyright<a className="text-white anchor-footer" href="https://www.linkedin.com/in/rodrigo-rodriguez-baa06b1b4/"> Rodrigo Rodriguez.</a> Todos los derechos reservados.
            </div>
        </footer>
    )
}
