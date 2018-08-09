import React, { Component } from 'react'

import { postMail } from './logic'


class ProvRegister extends Component{
  constructor(props) {
    super(props)

    this.state = {
      isSubmit: false,
      errorMessage: '',
    }
  }

  handleSubmit = async (e) => {
    const email = e.target.email.value

    // validation
    if (!email) {
      this.setState({
        errorMessage: 'メールアドレスを入力してください'
      })
      return
    }

    // メールアドレス送信
    await postMail(email)

    this.setState({
      isSubmit: true,
    })
  }

  render() {
    if (!this.state.isSubmit) {
      return (
        <div className='ProvRegister'>
          --- ProvRegister (public/unlogin) ---<br />

          <h2>仮登録</h2>

          <form onSubmit={(e) => {
            e.preventDefault()
            this.handleSubmit(e)
          }}>
            <input
              type='text'
              name='email'
              placeholder='メールアドレス'
              defaultValue='chestermx88@gmail.com'
            /><br />
            <button type='submit'>メール送信</button>
          </form>

          {this.state.errorMessage}
        </div>
      )
    } else {
      return (
        <div className='ProvRegister'>
          --- ProvRegister (public/unlogin) ---<br />

          メールを送信しました
        </div>
      )
    }
  }
}

export default ProvRegister
