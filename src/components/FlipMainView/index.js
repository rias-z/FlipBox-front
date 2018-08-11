import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
  display: block;
  margin: 2rem;
  padding: 0 0 2rem 0;
  min-height: 20rem;
  background-color: #fdd;
`

const Item = styled.div`
  margin: 0 2rem 2rem 2.4rem;
  padding: 0.7rem;
  background-color: #cfc;
  word-wrap: break-word;
`


const FlipMainView = (props) => {
  const { flip, items } = props

  const itemList = items.map(item => {
    // itemにnameが設定されている場合
    if (item.name) {
      return (
        <Item key={item.item_id}>
          <a href={item.url}>{item.name}</a>
        </Item>
      )
    } else {
      return (
        <Item key={item.item_id}>
          <a href={item.url}>{item.url}</a>
        </Item>
      )
    }
  })

  return (
    <Div className='FlipMainView'>
      <h1>{flip.title}</h1>

      {itemList}
    </Div>
  )
}

export default FlipMainView
