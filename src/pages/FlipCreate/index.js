import React, { Component } from 'react'
import { connect } from 'react-redux'

// logic
import {
  postFlip,
} from './logic'


class FlipCreate extends Component {
  handleSubmit(e) {
    const tags = e.target.tags.value.split(' ')

    this.props.postFlip({
      'flip': {
        title: e.target.flipTitle.value,
        tags: tags
      },
      'items': [
        {
          url: 'https://www.google.co.jp/',
          name: 'googleについて',
        },
        {
          url: 'https://qiita.com/',
          name: 'qiitaについて',
          description: 'qiita詳細'
        }
      ]
    })
  }

  render() {
    return (
      <div className="FlipCreate">
        --- FlipCreate (login) ---

      <form onSubmit={(e) => {
        e.preventDefault()
        this.handleSubmit(e)
      }}>
        <input type='text' name='flipTitle' placeholder='タイトル' defaultValue='temp_title' /><br />
        <input type='text' name='tags' placeholder='タグをスペース区切りで入力' defaultValue='React Redux' /><br />
        【保留】Item: url title description<br />
        【保留】Item: url title description<br />
        【保留】Item追加ボタン<br />
        <button type='submit'>Flip作成</button>
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch, getState) => ({
  postFlip: (params) => dispatch(postFlip(getState, params)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlipCreate)
