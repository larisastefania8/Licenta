import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createTreeReducer } from '../reduces/trees/createTreeReducer';
import { treeListReducer } from '../reduces/trees/treeListReducer';
import { userReducer } from '../reduces/users/userAuthReducer';

const middlewares = [thunk];


const reducer = combineReducers ({
    treeCreated: createTreeReducer,
    treesList: treeListReducer,
    userLogin: userReducer,

});

//Get user from local storage and save it into our store

const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData'))
:null;

const initialState = {
    userLogin: {
        userInfo: userAuthFromStorage
    }
}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export {store};
