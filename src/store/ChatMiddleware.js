import { push } from "connected-react-router";

export default store => next => action => {
	next(action);

	if (action.type==="ADD-CHAT"){
		store.dispatch(push('/chats/' + action.id))
	}
}