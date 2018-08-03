import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
// import registerServiceWorker from './registerServiceWorker'

import App from './containers/App'


const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    devTool
  )
)


ReactDOM.render(
  (
    <Provider store={store}>
      <MuiThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={App} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  ),
  document.getElementById('root')
)

// registerServiceWorker()
