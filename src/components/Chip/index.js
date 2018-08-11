import React from 'react'
import styled from 'styled-components'


const StyledChip = styled.div`
  height: 1.6rem;
  margin: 0 0.4rem 0 0;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  background: #aaa;
  font-size: 1.1rem;
  color: #fff;
`


const Chip = (props) => {
  const { tag } = props

  return (
    // TODO: tagをクリックでタグ検索画面に遷移
    <StyledChip>{tag}</StyledChip>
  )
}

export default Chip
