const AddNewContact = ({ addNewContact, contacts }) => {
    const handleSubmitNewContactForm = (event) => {
        event.preventDefault()
        const formulario = event.target
        if(!formulario.name.value) {
          alert('Debe ingresar un nombre')
          return
          }

        if(contacts.find(contact => contact.name === formulario.name.value)) {
          alert('Ya existe un contacto con ese nombre')
          return
        }
        const name_value = formulario.name.value
        formulario.reset()

        addNewContact(name_value)
    } 
  return (
    <form onSubmit={handleSubmitNewContactForm}>  
        <div>
            <label htmlFor='name'>Añadir contacto </label>
            <input name='name' id='name' placeholder='Nombre' />
        <button type='submit'>Anadir</button>
        </div>
    </form>
  )
}

export default AddNewContact