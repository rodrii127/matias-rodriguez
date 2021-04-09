import React from 'react';
import { CardsPublications } from './CardsPublications';
import { CarouselPage } from './CarouselPage';
import libros from '../../static/libros.png'

export const MainPage = () => {

    return (
        <div>
            <CarouselPage></CarouselPage>

            <div className='titulos'>
                <h1>Dr. Matías Rodríguez</h1>
            </div>
            <div className='parrafos'>
                <p className="lh-sm">Somos un estudio jurídico que brinda un asesoramiento jurídico integral tanto para la definición de estrategias, la toma de decisiones como la defensa judicial o administrativa de nuestros clientes, en las distintas ramas de nuestro ordenamiento jurídico, civil, penal, laboral, administrativo.</p>
                <p className='lh-sm'>Nos desempeñamos en las diferentes etapas que constituyen los conflictos. Una primera etapa que implica la prevención, con la búsqueda de soluciones satisfactorias que eviten a su vez el surgimiento de estos. Una segunda etapa que comienza cuando el conflicto ya se encuentra presente, mediante la realización de mediaciones, conciliaciones, reclamos extrajudiciales y finalmente la última etapa que es la presentación ante los tribunales para garantizar la defensa de los derechos de nuestros clientes. </p>
            </div>

            <hr class="new4"></hr>

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

            <hr class="new4"></hr>

            <CardsPublications></CardsPublications>
        </div>
    )
}
