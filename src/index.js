import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import sagas from './sagas';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; 


const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);
middleware.push(createLogger()); // use checker when in developments or remove from production

const enhancers = [applyMiddleware(...middleware)];

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   compose(
	...enhancers
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
