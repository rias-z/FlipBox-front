import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

// pages
import Top from '../../pages/Top'
import FlipCreate from '../../pages/FlipCreate'
import FlipDetail from '../../pages/FlipDetail'
import UserSettings from '../../pages/UserSettings'

// logic
import { initializedApp } from './logic'


class App extends Component {
  componentWillMount(){
    this.props.initializedApp()
  }

  render() {
    if (this.props.isTokenChecked) {
      return (
        <div className="App">
          [App]<br />
          + isAuthenticated: {this.props.isAuthenticated.toString()}<br />
          + isTokenChecked: {this.props.isTokenChecked.toString()}<br />
          - <a href='/'>top</a><br />
          - <a href='/settings'>/settings</a><br />
          - <a href='/flip/10'>/flip/10</a><br />
          - <a href='/flip/11'>/flip/11</a><br />
          - <a href='/new'>/new（flip新規作成）</a><br />
          [/]<br /><br />

          <Switch>
            <Route exact path='/' component={Top} />
            <Route path='/flip/:flip_id' component={FlipDetail} />

            {(() => {
              if (this.props.isAuthenticated) {
                return (
                  <Switch>
                    <Route path='/new' component={FlipCreate} />
                    <Route path='/settings' component={UserSettings} />
                  </Switch>
                )
              } else {
                return (
                  <Redirect to='/' />
                )
              }
            })()}
          </Switch>
        </div>
      )
    } else {
      return (
        <div className='App'>
          Loading...
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.App.isAuthenticated,
  isTokenChecked: state.App.isTokenChecked,
})

const mapDispatchToProps = (dispatch) => ({
  initializedApp: () => dispatch(initializedApp()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
