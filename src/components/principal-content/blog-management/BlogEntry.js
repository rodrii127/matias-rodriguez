import React from 'react';

export const BlogEntry = () => {
    // const dispatch = useDispatch();

    // const noteDate = moment(note.date);
    // let url = '';
    // note.urlImage !== '' ? (url = note.urlImage ) : (url = 'https://imagenesgratis.com.ar/wp-content/uploads/2020/03/river-plate-futbol-escudo-soccer-team-argentina-football-vertical-fondo-de-pantalla.jpg');
    
    const handleEntryClick = () => {
        // dispatch( activeNote( note.id, note ) );
    }

    return (
        <div className='journal__entry pointer' onClick={handleEntryClick} >
            <div 
                className='journal__entry-picture' 
                // style={{backgroundSize: 'cover',
                //         backgroundImage: `url(${url})`}}
            >
                la imagen
            </div>

            <div className='jorunal__entry-body'>
                <p className='journal__entry-title'>
                    El titulo
                    {/* {note.title} */}
                </p>
                <p className='jorunal__entry-content'>
                    El contenido
                    {/* {note.body} */}
                </p>
            </div>

            <div className='jorunal__entry-date-box'>
                {/* <span> {noteDate.format('dddd')} </span> */}
                {/* <h4> {noteDate.format('Do')} </h4> */}
            </div>
        </div>
    )
}
