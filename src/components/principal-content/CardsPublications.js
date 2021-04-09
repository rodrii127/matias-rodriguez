import React from 'react';
import articulo1 from '../../static/articulo1.png';
import articulo2 from '../../static/articulo2.png';
import articulo3 from '../../static/articulo3.png';

export const CardsPublications = () => {
    return (
        <div>
            <div className='titulos'>
                <h1>Publicaciones</h1>
            </div>
            <div className='parrafos'>
                <p className="lh-sm">Existen 3 artículos publicados por el Dr. Rodríguez en SAIJ (Sistema Argentino de Información Jurídica).</p>
            </div>
            <div class="row row-cols-1 row justify-content-center row-cols-md-5 g-4 mx-auto mb-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={articulo1} class="card-img-top" alt="articulo1"></img>
                        <div class="card-body">
                            <h5 class="card-title">Actos administrativos en la Ley I n 89: Misiones</h5>
                            <p class="card-text">PONER ACA TU TEXTO.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Publicado el 2 de enero de 2018.</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={articulo2} class="card-img-top" alt="articulo2"></img>
                        <div class="card-body">
                            <h5 class="card-title">Plazo de caducidad de los dividendos: Art. 224 Ley de Concursos y Quiebras</h5>
                            <p class="card-text">ACA TUI TEXTO bla bla</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Publicado el 9 de agosto de  2014.</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={articulo3} class="card-img-top" alt="articulo3"></img>
                        <div class="card-body">
                            <h5 class="card-title">Libertad de prensa y responsabilidad de los medios</h5>
                            <p class="card-text">ACA PONER TU TEXTO.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Publicado el 8 de agosto de 2017.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
