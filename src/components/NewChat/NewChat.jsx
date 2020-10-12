import React, {useState} from 'react';

function useInput(initialState){
	const [state, setState] = useState(initialState)

	const setInput =(event) =>{
		setState(event.target.value)
	}
	return [state,setInput,setState]
}
const NewChat = (props) =>{

	const [name, setName, setNameState] = useInput();

	const handleSubmit = (event) =>{
		event.preventDefault();		
		props.addChat(name);		
		setNameState("");
	}
	
	const handleKeyUp = (event) =>{
		
		if(event.keyCode === 13){					
			props.addChat(name)			
			setNameState("");
		}
	}

	return (
		<section className = "new-chat-field">
			<p>Add new chat</p>
			<form onSubmit = {handleSubmit} className ="new-chat-form">
				<input type="text"
					placeholder = "new chat"					
					value = {name}
					onChange = {setName}
					onKeyUp = {handleKeyUp}/>			
				<button >+</button>
			</form>
		</section>
	)
}
export default NewChat