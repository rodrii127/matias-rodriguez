import React from 'react';
import articulo1 from '../../static/articulo1.png';
import articulo2 from '../../static/articulo2.png';
import articulo3 from '../../static/articulo3.png';

export const CardsPublicationsSection = () => {
    return (
        <div>
            <div className='titulos'>
                <h1>Publicaciones</h1>
            </div>
            <div className='parrafos'>
                <p className="lh-sm">Existen 3 artículos publicados por el Dr. Rodríguez en SAIJ (Sistema Argentino de Información Jurídica).</p>
            </div>
            <div className="row row-cols-1 row justify-content-center row-cols-md-5 g-4 mx-auto mb-4">
                <div className="col">
                    <div className="card h-100 rounded border border-dark">
                        <img src={articulo1} className="card-img-top" alt="articulo1"></img>
                        <div className="card-body">
                            <h5 className="card-title">Actos administrativos en la Ley I n 89: Misiones</h5>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Publicado el 2 de enero de 2018.</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded border border-dark">
                        <img src={articulo2} className="card-img-top" alt="articulo2"></img>
                        <div className="card-body">
                            <h5 className="card-title">Plazo de caducidad de los dividendos: Art. 224 Ley de Concursos y Quiebras</h5>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Publicado el 9 de agosto de  2014.</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded border border-dark">
                        <img src={articulo3} className="card-img-top" alt="articulo3"></img>
                        <div className="card-body">
                            <h5 className="card-title">Libertad de prensa y responsabilidad de los medios</h5>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Publicado el 8 de agosto de 2017.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
