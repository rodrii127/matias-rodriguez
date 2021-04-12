import React from 'react';
import libros from '../../static/libros.png';
import family from '../../static/icons/family.png';
import hammer from '../../static/icons/hammer.png';
import commerce from '../../static/icons/commerce.png';
import penal from '../../static/icons/penal.png';
import prevention from '../../static/icons/prevention.png';
import conciliation from '../../static/icons/conciliation.png';
import mediation from '../../static/icons/mediation.png';
import civil from '../../static/icons/civil.png';
import successions from '../../static/icons/successions.png';
import injurys from '../../static/icons/injurys.png';
import contracts from '../../static/icons/contracts.png';
import administrative from '../../static/icons/administrative.png';

export const ServicesSection = () => {
    return (
        <section style={{backgroundColor:'lightgray'}} className='animate__animated animate__fadeIn'>
            <div className='titulos'>
                <h1>Servicios</h1>
            </div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='difference col-sm-4 d-flex justify-content-center'>
                        <img src={libros} alt='books-matias-rodriguez'></img>
                    </div>
                    <div className='difference col-sm-4 d-flex justify-content-center'>
                        <p>Brindamos un servicio especializado con profesionales en constante capacitación para ofrecer una defensa adecuada de los intereses de nuestros clientes. Respondemos consultas las 24 horas y garantizamos una dedicación en el tratamiento de cada una de nuestras causas </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="row row-cols-2 row justify-content-center row-cols-md-5 g-4 mx-auto mb-4 mt-2">
                    <div className="col">
                        <div className="card h-100 card-areas-servicios">
                            <div className="card-body">
                                <h5 className="card-title areas-servicios">Procesos Judiciales</h5>
                                <p className='image-card'>
                                    <img className="" src={hammer} alt='hammer'></img>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-areas-servicios">
                            <div className="card-body">
                                <h5 className="card-title areas-servicios">Prevención</h5>
                                <p className='image-card'>
                                    <img src={prevention} alt='prevention'></img>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-areas-servicios">
                            <div className="card-body">
                                <h5 className="card-title areas-servicios">Mediación</h5>
                                <p className='image-card'>
                                    <img className="" src={mediation} alt='mediation'></img>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-areas-servicios">
                            <div className="card-body">
                                <h5 className="card-title areas-servicios">Conciliación</h5>
                                <p className='image-card'>
                                    <img className="" src={conciliation} alt='conciliation'></img>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-2 justify-content-center row-cols-md-5 g-4 mx-auto mb-4 mt-2">
                    <div className="col">
                        <div className="card h-100 card-areas-servicios">
                            <div className="card-body">
                                <h5 className="card-title areas-servicios">Civil</h5>
                                <p className='image-card'>
                                    <img src={civil} alt='civil'></img>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-areas-servicios">
                            <div className="card-body">
                                <h5 className="card-title areas-servicios">Familia</h5>
                                <p className='image-card'>
                                    <img src={family} alt='family'></img>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-areas-servicios">
                            <div className="card-body">
                                <h5 className="card-title areas-servicios">Comercial</h5>
                                <p className='image-card'>
                                    <img src={commerce} alt='commerce'></img>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-areas-servicios">
                            <div className="card-body">
                                <h5 className="card-title areas-servicios">Sucesiones</h5>
                                <p className='image-card'>
                                    <img src={successions} alt='successions'></img>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-2 row justify-content-center row-cols-md-5 g-4 mx-auto pb-4 mt-2">
                    <div className="col">
                        <div className="card h-100 card-areas-servicios">
                            <div className="card-body">
                                <h5 className="card-title areas-servicios">Daños</h5>
                                <p className='image-card'>
                                    <img src={injurys} alt='injurys'></img>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-areas-servicios">
                            <div className="card-body">
                                <h5 className="card-title areas-servicios">Contratos</h5>
                                <p className='image-card'>
                                    <img src={contracts} alt='contracts'></img>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-areas-servicios">
                            <div className="card-body">
                                <h5 className="card-title areas-servicios">Penal</h5>
                                <p className='image-card'>
                                    <img src={penal} alt='penal'></img>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-areas-servicios">
                            <div className="card-body">
                                <h5 className="card-title areas-servicios" style={{fontSize:'19px'}}>Administrativo</h5>
                                <p className='image-card'>
                                    <img src={administrative} alt='administrative'></img>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
