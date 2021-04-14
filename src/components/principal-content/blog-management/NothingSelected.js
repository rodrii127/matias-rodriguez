import React from 'react';

export const NothingSelected = () => {
    return (
        <div className='nothing__main-content'>
            <p style={{fontSize:'150%'}}>
                Seleccione una entrada del blog
                <br />
                O cree una nueva.
                <br />
                <i style={{fontSize:'250%'}} className="bi bi-exclamation-diamond-fill"></i>
            </p>
        </div>
    )
}
