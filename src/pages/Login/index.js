import React, { Component } from 'react'
import { connect } from 'react-redux'

// logic
import { postLogin } from './logic'


class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errorMessage: '',
    }
  }

  handleSubmit (e) {
    const username = e.target.username.value
    const password = e.target.password.value

    // validation
    if (!username || !password) {
      this.setState({
        errorMessage: 'ユーザ名とパスワードを入力してください'
      })
      return
    }

    // ログイン
    this.props.postLogin({
      username: username,
      password: password,
    })
  }

  render() {
    return (
      <div className='Login'>
        --- Login (public/unlogin) ---
        <h2>ログイン</h2>

        <form onSubmit={(e) => {
          e.preventDefault()
          this.handleSubmit(e)
        }}>
          <input
            type='text'
            name='username'
            placeholder='ユーザ名'
            defaultValue='rias-z'
          /><br />

          <input
            type='text'
            name='password'
            placeholder='パスワード'
            defaultValue='temp_password'
          /><br />

          <button type='submit'>登録</button>
        </form>

        {this.state.errorMessage}
      </div>
    )
  }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch, getState) => ({
  postLogin: (params) => dispatch(postLogin(getState, params)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
