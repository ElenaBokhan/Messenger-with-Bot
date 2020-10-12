
import React, { Component } from 'react';
import Message from '../Message/Message.jsx';

class MessageList extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className = "messages-list-field">
					{this.props.messages.map((elem, index) => <Message 	name = {elem.name} 
																		text = {elem.text}
																		index = {index}
																		key = {index}
																		removeMsg = {this.props.removeMsg}
																		changeClick = {this.props.changeClick}/>)}
				</div>	
	}		
}
export default MessageList;