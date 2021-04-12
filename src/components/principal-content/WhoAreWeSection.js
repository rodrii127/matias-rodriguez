import React from 'react';
import { CarouselSection } from './CarouselSection';

export const WhoAreWeSection = () => {
    return (
        <div className='animate__animated animate__fadeIn'>
            
            <CarouselSection></CarouselSection>
            
            <div className='titulos'>
                <h1>Dr. Matías Rodríguez</h1>
            </div>
            <div className='parrafos'>
                <p className="lh-sm">Somos un estudio jurídico que brinda un asesoramiento jurídico integral tanto para la definición de estrategias, la toma de decisiones como la defensa judicial o administrativa de nuestros clientes, en las distintas ramas de nuestro ordenamiento jurídico, civil, penal, laboral, administrativo.</p>
                <p className='lh-sm'>Nos desempeñamos en las diferentes etapas que constituyen los conflictos. Una primera etapa que implica la prevención, con la búsqueda de soluciones satisfactorias que eviten a su vez el surgimiento de estos. Una segunda etapa que comienza cuando el conflicto ya se encuentra presente, mediante la realización de mediaciones, conciliaciones, reclamos extrajudiciales y finalmente la última etapa que es la presentación ante los tribunales para garantizar la defensa de los derechos de nuestros clientes. </p>
            </div>

            <hr className="new4"></hr>

            <div className='titulos'>
                <h1>Lo que nos identifica</h1>
            </div>
            <div className='parrafos'>
                <p className="lh-sm">
                    “Res non Verba” (Hechos no palabras), constituye no solo el slogan sino también la premisa fundamental de vida y de trabajo de este estudio jurídico, destinado a que los clientes que asisten con incertidumbre, temores y preocupaciones puedan retirarse con la tranquilidad de haber encontrado las respuestas adecuadas a sus problemas.
                    Brindamos una atención personalizada para cada uno de nuestros clientes, con la mayor empatía y dedicación a las consultas que son realizadas, no permitiendo que nadie se retire sin haber evacuado todas las dudas con las que asisten y sin haber comprendido las explicaciones de los profesionales, porque creemos fervientemente que una defensa correcta comienza cuando el profesional y el cliente logran un entendimiento mutuo para abordar el problema en forma conjunta.
                </p>
            </div>
        </div>
    )
}
