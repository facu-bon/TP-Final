import MessagesList from '../MessagesList/MessagesList'
import CreateNewMessage from '../CreateNewMessage/MensajeNuevo'

const ChatDetail = ({chatDetail, createNewMessage}) => {

    return (
        <div className='chat-detail'>
            <h2 className='chat-name'>{chatDetail.name}</h2>
            <MessagesList messages={chatDetail.messages} />
            <CreateNewMessage createNewMessage={createNewMessage} />
        </div>
    )
}

export default ChatDetail