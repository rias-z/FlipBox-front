import React from 'react'
import styled from 'styled-components'

// import { IMAGE_ENDPOINT } from '../../config'


const Div = styled.div`
  margin: 2rem 2rem 1rem 2rem;
  padding: 1rem 0 0 0;
  height: 4rem;
  background: #fdd;
`

const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.4rem;
  text-align: center;
`

const Name = styled.span`
  margin: 1.2rem;
  background: #cff;
  font-size: 1.2rem;
`

const CreateAt = styled.span`
  margin: 0.4rem;
  background: #cff;
  font-size: 1rem;
`


const FlipHeader = (props) => {
  const { author, flip } = props

  return (
    <Div className='FlipHeader'>
      {/* TODO: image_endpoint */}
      {/* <Img src={IMAGE_ENDPOINT + author.thumbnail}/> */}
      <Img src={'/images/sample.jpg'}/>

      <Name>@{author.username}</Name>

      <CreateAt>作成日: {flip.create_at}</CreateAt>
    </Div>
  )
}

export default FlipHeader
