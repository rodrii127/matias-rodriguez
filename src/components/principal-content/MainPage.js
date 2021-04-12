import React from 'react';
import { CardsPublicationsSection } from './CardsPublicationsSection';
import { ContactSection } from './ContactSection';
import { ServicesSection } from './ServicesSection';
import { WhoAreWeSection } from './WhoAreWeSection';

export const MainPage = () => {

    return (
        <div className='animate__animated animate__fadeIn'>
            <WhoAreWeSection></WhoAreWeSection>            

            <ServicesSection></ServicesSection>

            <ContactSection></ContactSection>

            <CardsPublicationsSection></CardsPublicationsSection>
        </div>
    )
}
