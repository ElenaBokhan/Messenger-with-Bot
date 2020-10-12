import React, { Component } from 'react';
import Chat from '../components/Chat/Chat';
import { sendMessageActionCreator, removeMessageActionCreator, changeClickActionCreator, editMessageActionCreator } from '../store/chatReducer';
import { connect } from 'react-redux';


let mapStateToProps = ({chatReducer}, ownProps) =>{	
	const chatId =  ownProps.match.params.id;	
	return {
		messages: chatReducer.chats[chatId].msgArr,
		author: chatReducer.chats[chatId].author,
		chatId: chatReducer.chatId,
		changeMsgText: chatReducer.changeMsg.text,	
	}
	
}
let mapDispatchToProps = (dispatch) =>{
	return {
		onSendMsg: (message,id) => dispatch(sendMessageActionCreator(message,id)),
		removeMessage: (id,index) => dispatch(removeMessageActionCreator(id,index)),
		changeClick: (id,index) =>dispatch(changeClickActionCreator(id,index)),
		editMsg: (message,id) =>dispatch(editMessageActionCreator(message,id)),				
		}
}
	
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { id } = ownProps.match.params;

    const onSendMsg = (message) => {
		dispatchProps.onSendMsg( message,id);		
	}
	const removeMsg = (index) => {		
		dispatchProps.removeMessage(Number(id),Number(index))
	}
	const changeClick = (index) => {		
		dispatchProps.changeClick(Number(id),Number(index))
	}
	const editMsg = (message) => {		
		dispatchProps.editMsg(message,Number(id))
	}
	
    return {
		...stateProps,
		...dispatchProps,
		onSendMsg,
		removeMsg,
		changeClick,
		editMsg,
    }
}
 const ChatContainer = connect(mapStateToProps,mapDispatchToProps, mergeProps)(Chat)

 export default ChatContainer


