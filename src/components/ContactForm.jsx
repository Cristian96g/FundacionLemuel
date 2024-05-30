import { useForm } from 'react-hook-form';
import Button from './Button';

const ContactForm = ({row,textButton}) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log("formulario enviado correctamente")
            reset();
        } catch (error) {
            console.log('Error al enviar el formulario', error)
        }

    }

    return (
            <form onSubmit={handleSubmit(onSubmit)} id="form" action="" method="POST">

                <div class="mb-6">
                    <input
                        {...register('nombre', { required: "*El nombre es requerido" })}
                        type="text"
                        placeholder="Nombre" name="nombre" class="input__style " />
                    {errors.nombre && <p className='text-red-500'>{errors.nombre.message}</p>}
                </div>
                <div class="mb-6">
                    <input
                        {...register('email', {
                            required: '*El email es requerido',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Email no es válido'
                            }
                        })}
                        type="email"
                        placeholder="Email" name="email" class="input__style" />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div class="mb-6">
                    <input
                        {...register('telefono', {
                            required: '*El teléfono es requerido',
                            minLength: {
                                value: 10,
                                message: 'El teléfono debe tener al menos 10 caracteres'
                            }
                        })}
                        type="text"
                        placeholder="Telefono" name="telefono" class="input__style" />
                    {errors.telefono && <p className="text-red-500">{errors.telefono.message}</p>}
                </div>
                <div class="mb-6">
                    <textarea
                        {...register("mensaje", { required: "El mensaje es requerido" })}
                        rows={row} placeholder="*Deja tu comentario.." name="mensaje" class="input__style resize-none"></textarea>
                    {errors.mensaje && <p className="text-red-500">{errors.mensaje.message}</p>}
                </div>
                <div>
                    <Button
                        disabled={isSubmitting}
                        text={textButton}
                        className={'text-white bg-[#f58634] mb-6 md:mb-0'}>
                    </Button>
                </div>
            </form>
    )


}

export default ContactForm


