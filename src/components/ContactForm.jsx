import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Button from './Button';

const ContactForm = ({ row, textButton }) => {
    const [message, setMessage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const form = useRef();

  const onSubmit = async (data) => {
    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
        
      );
      console.log('Formulario enviado correctamente', result.text);
      setMessage('Mensaje enviado correctamente');
      setTimeout(() => {
        setMessage(null);
      }, 5000);
      reset();
    } catch (error) {
      console.error('Error al enviar el formulario', error);
      setMessage('Error al enviar el formulario');
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  return (
    <>
    <form ref={form} onSubmit={handleSubmit(onSubmit)} id="form" action="" method="POST">
      <div className="mb-6">
        <input
          {...register('nombre', { required: '*El nombre es requerido' })}
          type="text"
          placeholder="Nombre"
          name="nombre"
          className="input__style"
        />
        {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}
      </div>
      <div className="mb-6">
        <input
          {...register('email', {
            required: '*El email es requerido',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Email no es válido',
            },
          })}
          type="email"
          placeholder="Email"
          name="email"
          className="input__style"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="mb-6">
        <input
          {...register('telefono', {
            required: '*El teléfono es requerido',
            minLength: {
              value: 10,
              message: 'El teléfono debe tener al menos 10 caracteres',
            },
          })}
          type="text"
          placeholder="Teléfono"
          name="telefono"
          className="input__style"
        />
        {errors.telefono && <p className="text-red-500">{errors.telefono.message}</p>}
      </div>
      <div className="mb-6">
        <textarea
          {...register('mensaje', { required: 'El mensaje es requerido' })}
          rows={row}
          placeholder="*Deja tu comentario.."
          name="mensaje"
          className="input__style resize-none"
        ></textarea>
        {errors.mensaje && <p className="text-red-500">{errors.mensaje.message}</p>}
      </div>
      <div>
        <Button
          disabled={isSubmitting}
          text={textButton}
          className="text-white bg-[#f58634] mb-6 md:mb-0"
        />
      </div>
    </form>
    {message && <div className="mt-4 text-green-500">{message}</div>}
    </>
  );
};

export default ContactForm;
