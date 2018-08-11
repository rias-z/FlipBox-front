import React from 'react'
import styled from 'styled-components'

import { IMAGE_ENDPOINT } from '../../config'

// components
import Chip from '../Chip'


const Div = styled.div`
  display: flex;
  margin: 0 2rem 2rem 2rem;
  background: #fdf
`


const FlipTagList = (props) => {
  const { tags } = props

  const tagList = tags.map(tag => (
    <Chip key={tag} tag={tag} />
  ))

  return (
    <Div className='FlipTagList'>
      {tagList}
    </Div>
  )
}

export default FlipTagList
