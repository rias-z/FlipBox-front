import { combineReducers } from 'redux'

import App from './containers/App/reducer'
import FlipCreate from './pages/FlipCreate/reducer'
import FlipDetail from './pages/FlipDetail/reducer'
import Top from './pages/Top/reducer'


export default combineReducers({
  App,
  FlipCreate,
  FlipDetail,
  Top,
})
