import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';

export const ContactSection = () => {

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    }

    const [formValues, handleInputChange] = useForm(initialValues);

    const { name, email, phone, subject, message } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_8z8jkky', 'template_hrclv2a', formValues, 'user_HvgLpcoU5wcsVy7Zste2z')
            .then((response) => {
                Swal.fire(
                    '¡Éxito!',
                    'El mensaje ha sido enviado correctamente.',
                    'success'
                );
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Hubo un error al enviar el mail, por favor comunicarse con rodriguezrodrigo127@gmail.com',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
                console.log('FAILED...', err);
            });
    }

    return (
        <section className='pt-1 pb-4 animate__animated animate__fadeIn' style={{ backgroundColor: 'white' }}>
            <div className='titulos'>
                <h1>Contacto</h1>
            </div>
            <div className='container rounded border border-dark' style={{ backgroundColor: '#f2f2f2' }}>
                <div className='row justify-content-center'>
                    <div className='col-md-6 justify-content-center'>
                        <div>
                            <div className='titulos'>
                                <h3>Comunicación directa</h3>
                            </div>
                            <div className='d-flex' style={{ justifyContent: 'center' }}>
                                <h5 className='me-4'><a className='tel-anchor' href="tel:+5493764357291"><i className="bi bi-telephone"></i>(376)4357291</a></h5>
                                <h5 className='ms-4'><a className='tel-anchor' href='https://api.whatsapp.com/send?phone=+5493764357291&text=Hola%20Dr.%20Rodríguez,%20quiero%20realizar%20una%20consulta' target='_blank'><i className="bi bi-whatsapp"></i>(376)4357291</a></h5>
                            </div>
                        </div>
                        <hr className='hr-contact'></hr>
                        <div className='titulos'>
                            <h3>Nuestra oficina</h3>
                        </div>
                        <iframe className='map-matias-rodriguez' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.0978958521255!2d-55.9170213852808!3d-27.37265791913533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be15eadc41a3%3A0x5923f5a77a28b673!2sAv.%20L%C3%B3pez%20y%20Planes%203829%2C%20N3301EMZ%20Posadas%2C%20Misiones!5e0!3m2!1ses!2sar!4v1617992308589!5m2!1ses!2sar" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    <div className='col-md-6 justify-content-center form-contact'>
                        <div className='titulos'>
                            <h4>Deje su mensaje y nos comunicaremos</h4>
                        </div>
                        <form className='ms-3 mb-3' onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Nombre:</label>
                                <div className="col-sm-7">
                                    <input type="text" name='name' value={name} onChange={handleInputChange} className="form-control" required></input>
                                </div>
                            </div>
                            <div className="row mb-3 ">
                                <label className="col-sm-2 col-form-label">Email:</label>
                                <div className="col-sm-7">
                                    <input type="email" className="form-control" name='email' value={email} onChange={handleInputChange} required></input>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Telefono:</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" name='phone' value={phone} onChange={handleInputChange} required></input>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Asunto:</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" name='subject' value={subject} onChange={handleInputChange} required></input>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Mensaje:</label>
                                <div className="col-sm-7">
                                    <textarea className="form-control" rows="5" style={{ resize: 'none' }} name='message' value={message} onChange={handleInputChange} required></textarea>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button type="submit" className="btn btn-dark ms-auto">Enviar Formulario</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
