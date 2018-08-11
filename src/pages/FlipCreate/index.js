import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import ItemTables from '../../components/ItemTables'

// logic
import {
  postFlip,
} from './logic'


class FlipCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [{
        id: 1,
        url: '',
        name: '',
        description: '',
      }],
      ids: [0],
    }
  }

  setIds(ids) {
    this.setState({
      ids: ids,
    })
  }

  handleSubmit(e) {
    const { ids } = this.state
    const target = e.target

    const tags = target.tags.value.split(' ')


    const items = ids.map(id => {
      return {
        url: target['url' + id].value,
        name: target['name' + id].value,
        description: '',
      }
    })

    this.props.postFlip({
      'flip': {
        title: target.flipTitle.value,
        tags: tags
      },
      'items': items,
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

          <button type='submit'>Flip作成</button>
          <ItemTables
            ids={this.state.ids}
            setIds={(ids) => this.setIds(ids)}
          />
        </form>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
