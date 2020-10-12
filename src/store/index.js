import {createStore, combineReducers, applyMiddleware} from 'redux';
import chatReducer from './chatReducer';
import botAnswer from './BotMiddleware';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import ChatMiddleware from './ChatMiddleware';
import ReduxThunk from 'redux-thunk';


export const history = createBrowserHistory();

const reducers = (history) => combineReducers({
	router : connectRouter(history),
	chatReducer: chatReducer,	
})

export function initStore(){
	const innitialStore = {};
	return createStore(reducers(history), innitialStore, applyMiddleware(botAnswer, ReduxThunk, routerMiddleware(history),ChatMiddleware))
}