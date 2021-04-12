import React from 'react';
import { CardsPublicationsSection } from './CardsPublicationsSection';
import { CarouselSection } from './CarouselSection';
import { ContactSection } from './ContactSection';
import { ServicesSection } from './ServicesSection';
import { WhoAreWeSection } from './WhoAreWeSection';

export const MainPage = () => {

    return (
        <div>
            <CarouselSection></CarouselSection>

            <hr className="new4"></hr>

            <WhoAreWeSection></WhoAreWeSection>

            <hr className="new4"></hr>

            <ServicesSection></ServicesSection>

            <hr className="new4"></hr>

            <ContactSection></ContactSection>

            <hr className="new4"></hr>

            <CardsPublicationsSection></CardsPublicationsSection>
        </div>
    )
}
