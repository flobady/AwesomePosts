import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../Reducers';
import rootSaga from '../Sagas';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: [
	//   'posts',
	],
}

const middleware = [];
const enhancers = [];

// Connect the sagas to the redux store
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

enhancers.push(applyMiddleware(...middleware));

// Redux persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(...enhancers))
const persistor = persistStore(store)

// Kick off the root saga
sagaMiddleware.run(rootSaga)

export default { store, persistor }