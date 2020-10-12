import React from 'react';
import propTypes from 'prop-types';
import MessageList from '../MessageList/MessageList';
import ChatForm from '../ChatForm/ChatForm';

const Chat = (props) => {
	return (
				<div style = {{width: "70%", height: "100%",position: "relative"}}>
					<MessageList 	messages={props.messages}
									removeMsg = {props.removeMsg}
									changeClick = {props.changeClick}/>
					<ChatForm 	onSendMsg = {props.onSendMsg}								
								author = {props.author}
								chatId = {props.chatId}
								removeMsg = {props.removeMsg}
								changeMsgText = {props.changeMsgText}
								editMsg = {props.editMsg}/>
				</div>	
		)
}

export default Chat;