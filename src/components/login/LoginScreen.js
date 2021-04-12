import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import Swal from 'sweetalert2';

export const LoginScreen = ( {history} ) => {
    
    const { dispatch } = useContext( AuthContext );

    const [ formValues, handleImputChange ] = useForm({
        userName: 'matiasrodriguez',
        password: 'probando1234'
    });

    const { userName, password } = formValues;
    
    const handleLogin = (e) =>{
        e.preventDefault();
        if ( startLoginEmailPassword(userName, password) ) {
            dispatch( {
                type: types.login,
                payload:{
                    name: 'Matías',
                    username: userName,
                    password: password
                }
            } );
            Swal.fire(
                'Bienvenido!',
                'Estás como modo administrador.',
                'success'
            );
            history.replace('/management/blog-create');
        } else{
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
    }
    
    const startLoginEmailPassword = (username, password) => {
        if ( username === 'matiasrodriguez' && password === 'probando1234' ) {
            return true;    
        }
        return false;
    }


    return (
        <div className = 'animate__animated animate__fadeIn animate__faster	500ms'> 
            <h3 className='auth__title'>Login</h3>
 
            <form onSubmit={ handleLogin }>
                <input type='text' placeholder='Username' name='userName' className='auth__input' autoComplete='off' value = {userName} onChange={handleImputChange} />
                <input type='password' placeholder='Password' name='password' className='auth__input' value = {password} onChange={handleImputChange} />
                <button type='submit' className='btn btn-primary btn-block'> Login </button>
           </form>
        </div>
    )
}
