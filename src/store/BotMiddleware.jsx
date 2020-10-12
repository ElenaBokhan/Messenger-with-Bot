import { sendAnswerToBot } from "./chatOperations";

const botAnswer = store => next => action => {
	next(action);
	if(store.getState().chatReducer.chats){
		const chats = Object.entries(store.getState().chatReducer.chats)
							.map(([id,{author}])=>({id,author}));	
		if (action.type == "SEND-MSG" && action.message.name != "Anfisa") {			
			store.dispatch(sendAnswerToBot(action.message.name,action.chatId,action.message.text))
		}	
		else if (action.type == "ADD-CHAT") {
			chats.map(item => {
				if(item.author == action.name){					
					store.dispatch(sendAnswerToBot(action.name, item.id,"Привет!"))
				}
			})
		}	
	}
}

export default botAnswer;

