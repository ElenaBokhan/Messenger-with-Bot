import { connect } from "react-redux";
import  { addChatActionCreator } from "../store/chatReducer";
import ChatList from "../components/ChatList/ChatList";



let mapStateToProps = ({chatReducer}) =>{
	if(chatReducer.chats){
		const chats = Object.entries(chatReducer.chats).map( ([id, {author}] )=> ({id,author}) );	
			return{
				chats,
				newMsgEffect: chatReducer.newMsgEffect,
				isLoading: chatReducer.isLoading 	
			}	
	} else return {}
		
}
let mapDispatchToProps = (dispatch) =>{
	return {
		addChat: (nameChat, id) => dispatch(addChatActionCreator(nameChat, id)),		
		}
}
const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const  id  = stateProps.chats ? stateProps.chats.length+1 : null;
	const addChat = (nameChat) => {
        dispatchProps.addChat( nameChat,id);
    }
	return {
		...stateProps,
		addChat,
	}
}
const ChatListContainer = connect (mapStateToProps, mapDispatchToProps,mergeProps)(ChatList)

export default ChatListContainer;
