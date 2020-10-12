import React, {useState} from 'react';

function useInput(initialState){
	const [state, setState] = useState(initialState)

	const setInput =(event) =>{
		setState(event.target.value)
	}
	return [state,setInput,setState]
}
const ChatForm = (props) => {	
	
	const [text, setText, setTextState] = useInput(props.changeMsgText);

	const handleSubmit = (event) =>{
		event.preventDefault();
		if(props.changeMsgText===""){			
			props.onSendMsg({name:props.author,text});			
			setTextState(null);	
		}else {
			debugger
			props.editMsg({name:props.author,text})
			setTextState(null);	
		}			
	}
	
	const handleKeyUp = (event) =>{
			if(event.keyCode === 13){
				props.changeMsgText==="" ? props.onSendMsg({name:props.author,text})
				: props.editMsg({name:props.author,text});	
				setTextState(null);	
		}
	}
	return (
		<form onSubmit = {handleSubmit} className ="chat-form">			
			<textarea 
				placeholder = "type your message"
				value = {text || props.changeMsgText}
				onChange = {setText}
				onKeyUp = {handleKeyUp} >
			</textarea>
			<button >{props.changeMsgText==="" ? "SEND" : "CHANGE"}</button>
		</form>
	)
}
export default ChatForm;