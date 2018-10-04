import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import sagas from './sagas';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; 

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   compose(
	applyMiddleware(sagaMiddleware),
    )
);

sagaMiddleware.run(sagas);


ReactDOM.render(<Provider store={store}>
		<BrowserRouter>
			<Switch>
    				<Route exact path='/' component={App} />
  			</Switch>
		</BrowserRouter>
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
