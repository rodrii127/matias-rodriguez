import React, { useContext } from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import { BlogEntries } from './BlogEntries';

export const Sidebar = () => {

    const { user } = useContext(AuthContext);

    const handleLogout = (e) => {
        //dispatch(startLogout());
    }

    const handleAddNewEntry = () => {
        //dispatch(startNewNote(notes));
    }

    return (
        <aside className='journal__sidebar '>
            <div className='journal__sidebar-navbar'>
                <h3 className='mt-5'>
                    <span style={{fontSize:'85%'}}> Hola {user.name}.</span>
                </h3>
            </div>

            <div className='journal__new-entry' onClick={handleAddNewEntry} >
                <p className='mt-5'>Nueva Entrada</p>
            </div>

            <BlogEntries />
        </aside>
    )
}
