import { max, union } from 'lodash'

import React, { Component } from 'react'
import { SortablePane, Pane } from 'react-sortable-pane';


class ItemTables extends Component{
  addTable() {
    const { ids } = this.props
    let nextId = 0

    if (ids.length !== 0) {
      nextId = max(ids) + 1
    }

    const nextIds = union([...ids, nextId])

    // 親ids更新
    this.props.setIds(nextIds)
  }

  removeTable(id) {
    const { ids } = this.props

    const nextIds = ids.filter(v => id !== v)

    // 親ids更新
    this.props.setIds(nextIds)
  }


  render() {
    const { ids } = this.props

    const panes = ids.map(id => (
      <Pane
        key={id}
        defaultSize={{ width: 360, height: 80 }}
        style={{
          backgroundColor: 'palevioletred'
        }}
        resizable={{ x: false, y: false, xy: false }}
      >
        [{id}]
        <button type='button' onClick={() => {
          this.removeTable(id)
        }}>cls</button><br />

        url_<input
          type='text'
          name={'url' + id}
          placeholder='url'
          defaultValue={'url' + id}
        /><br />

        name_<input
          type='text'
          name={'name' + id}
          placeholder='name'
          defaultValue={'name' + id}
        /><br />
      </Pane>
    ))

    return (
      <div>
        <button type='button' onClick={() => {
          this.addTable()
        }}>addTable</button>

        <SortablePane
          direction="vertical"
          margin={20}
        >
          {panes}
        </SortablePane>
      </div>
    )
  }
}

export default ItemTables
