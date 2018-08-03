import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

// pages
import Top from '../../pages/Top'
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
          [/]<br /><br />

          <Switch>
            <Route exact path='/' component={Top} />

            {(() => {
              if (this.props.isAuthenticated) {
                return (
                  <Switch>
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
