import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../Reducers';
import rootSaga from '../Sagas';
import createSagaMiddleware from 'redux-saga';

// Connect the sagas to the redux store
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default store;