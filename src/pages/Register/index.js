import React, { Component } from 'react'

import { postRegister } from './logic'


class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSubmit: false,
      errorMessage: '',
    }
  }

  handleSubmit = async (e) => {
    const username = e.target.username.value
    const password = e.target.password.value

    // validation
    if (!username || !password) {
      this.setState({
        errorMessage: 'ユーザ名とパスワードを入力してください'
      })
      return
    }

    // 本登録
    // TODO: 暗号化してパスワードを送信する
    await postRegister({
      username: username,
      password: password,
    })

    this.setState({
      isSubmit: true,
    })
  }

  render() {
    if (!this.state.isSubmit) {
      return (
        <div className='Register'>
          --- Register (public/unlogin) ---

          <h2>登録</h2>

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
    } else {
      return (
        <div className='Register'>
          --- Register (public/unlogin) ---

          <br />

          登録できました
        </div>
      )
    }
  }
}

export default Register
