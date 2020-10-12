import { initChatActionCreator, loadingChatActionCreator, sendMessageActionCreator } from "./chatReducer"; 
 
 const fetchChat = () => async dispatch =>{
	dispatch(loadingChatActionCreator());
	const response = await fetch("/api/chats.json");
	const result = await response.json();
	dispatch(initChatActionCreator(result))
}
export default fetchChat;

export const sendAnswerToBot = (name, id, text) => async dispatch =>{
	const formData = new FormData;
	formData.append('query', JSON.stringify({
		ask: text,
		userid: id+"111",
		key: ""
	}));
	const response = await fetch('/bot/', { method: 'post', body: formData});
	const result = await response.json();
	dispatch(sendMessageActionCreator({name: "Anfisa", text: result.aiml}, id))
}
 