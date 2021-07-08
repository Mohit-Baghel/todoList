import {createStore,combineReducers,applyMiddleware} from 'redux';
import  {crt_task_reducer} from './reducers/reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const reducer=combineReducers({ 
    tasks:crt_task_reducer
});

// let initialState={data:[]};initialState,

const middleware=[thunk];


const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;