import React, { useEffect, useState } from 'react'
import ChatList from '../../Components/ChatList/ChatList'
import { getContacts } from '../../services/contactService'
import { useParams } from 'react-router'
import ChatDetail from '../../Components/ChatDetail/ChatDetail'
import '../../CSS/Chat.css'


const ChatScreen = () => {
  const [contacts, setContacts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [chatDetail, setChatDetail] = useState(null)
  const { chat_id } = useParams()
  
  function loadContacts() {
    setLoading(true)
    setTimeout(
      () => {
        const contacts = getContacts()
        setContacts(contacts)
        setLoading(false)
      },
      2000
    )

  }

function addNewContact(name) {
    const newId = contacts.length + 1;


    const welcomeMessage = {
      id: 1, 
      content: 'Chee Gracias por agregarme.', 
      author_id: newId,
      author_name: name, 
      created_at: 'Ahora',
      status: 'UNREAD'
    };


    const new_contact = {
      id: newId,
      user_id: newId,
      name: name,
      profile_picture: 'https://cdn.miiwiki.org/8/85/Default_Male_Mii.png',
      last_connection: 'ahora',
      is_connected: true,
      messages: [ welcomeMessage ] 
    };


    setContacts(
      (prev_state) => {
        return [...prev_state, new_contact];
      }
    );
  }
  function createNewMessage(message) {
    const new_message = {
      id: chatDetail.messages.length + 1,
      content: message,
      author_id: 5342340, 
      author_name: 'Facundo', 
      created_at: 'Hoy',
      status: 'VIEWED'
    }
    setContacts(
      (prev_state) => {
        return prev_state.map(
          (chat) => {
            if (Number(chat.id) === Number(chat_id)) {
              chat.messages = [...chat.messages, new_message]
            }
            return chat
          }
        )
      }
    )

    //Mensaje automatizado a los 2 segundos
    setTimeout(
      sendAutomaticMessage,
      2000
    )
  }

  function sendAutomaticMessage() {
    const new_message = {
      id: chatDetail.messages.length + 1,
      content: 'Tu mensaje fue recibido',
      author_id: chatDetail.user_id,
      author_name: chatDetail.name,
      created_at: 'Hoy',
      status: 'VIEWED'
    }
    setContacts(
      (prev_state) => {
        return prev_state.map(
          (chat) => {
            if (Number(chat.id) === Number(chat_id)) {
              chat.messages = [...chat.messages, new_message]
            }
            return chat
          }
        )
      }
    )
  }

  function loadChatDetail() {

    if (contacts && !loading && chat_id) {
      const chat_selected = contacts.find(contact => Number(contact.id) === Number(chat_id))
      setChatDetail(chat_selected)
    }
  }

  useEffect(
    loadContacts,
    []
  )

  useEffect(
    loadChatDetail,
    [chat_id, contacts]
  )

  return (
    <div className='container'>
      <div className='panelizquierdo'>

        {
          loading
            ? <span>Cargando contactos...</span>
            : contacts && <ChatList contacts={contacts} addNewContact={addNewContact} />
        }


      </div>
      <div className='panelderecho'>

        {
          !loading && (
            !chat_id
              ? <h2>Aun no has seleccionado ningun chat</h2>
              : (
                chatDetail
                  ? <ChatDetail chatDetail={chatDetail} createNewMessage={createNewMessage} />
                  : null
              )
          )
        }


      </div>
    </div>
  )
}

export default ChatScreen