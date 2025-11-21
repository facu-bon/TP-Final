import React from 'react'

const CreateNewMessage = ({createNewMessage}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formulario = event.target
        const message_value = formulario.message.value
        createNewMessage(message_value)
        //Limpia los campos del formulario
        formulario.reset()
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <textarea name='message' id='message' placeholder='Ingrese el mensaje' />
        <button type='submit'> Enviar mensaje </button>
        </div>
    </form>
  )
}

export default CreateNewMessage