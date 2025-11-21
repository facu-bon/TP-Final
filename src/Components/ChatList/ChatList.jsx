import { Link } from 'react-router'
import AddNewContact from '../AddNewContact/AddNewContact'

const ChatList = ({ contacts, addNewContact }) => {


    return (
        <div>
            <AddNewContact 
            addNewContact={addNewContact} 
            contacts={contacts} />
            {
                contacts.map(
                    (contact) => {
                        return (
                            <div className="fila-contacto">
                                <hr />
                                <Link to={'/chat/' + contact.id} key={contact.id}>

                                    <img width={'50px'} src={contact.profile_picture} />
                                    <span>{contact.name}</span>
                                    <span className='last'>Ultima conexion: {contact.last_connection}</span>

                                </Link>
                                <hr />
                            </div>
                        )
                    }
                )
            }

        </div>
    )
}

export default ChatList