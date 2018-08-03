import { combineReducers } from 'redux'

import App from './containers/App/reducer'
import Top from './pages/Top/reducer'


export default combineReducers({
  App,
  Top,
})
