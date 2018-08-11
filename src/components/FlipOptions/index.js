import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
  margin: 0 2rem;
  background: #ffd;
`

const Btn = styled.button`
  color: #fff;
  background: #fd9535;
  border-bottom: solid 2px #d27d00;
  border-radius: 0.2rem;
  font-weight: bold;
  font-size: 0.9rem;
`


const FlipOptions = (props) => {
  const { isAuthenticated, isAuthor } = props
  const { onSubmitFlipEdit } = props

  if (isAuthenticated) {
    if (isAuthor) {
      return (
        <Div className='FlipOptions'>
          <Btn onClick={onSubmitFlipEdit}>編集する</Btn>
        </Div>
      )
    } else {
      return (
        <Div className='FlipOptions'>
          <Btn onClick={onSubmitFlipEdit}>編集リクエストを送る</Btn>
        </Div>
      )
    }
  } else {
    return null
  }
}

export default FlipOptions
