import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
  position: absolute;
  position: -webkit-sticky;
  position: sticky;
  top: 15rem;
`

const Img = styled.img`
  padding: 0 0 0 2rem;
  width: 2.4rem;
  height: 2.4rem;
`

// TODO: SideBarのdivが食い込んでいるので，間隔調整を行う必要アリ
const FlipDetailSideBar = (props) => {
  const {
    bookmarkCnt,
    goodCnt,
    isBookmark,
    isGood
  } = props
  const {
    postFlipBookmark,
    postFlipGood,
    revertFlipBookmark,
    revertFlipGood,
  } = props

  const bookmarkButton = isBookmark ? (
    <div>
      <Img
        src={'/images/bookmark-on.png'}
        onClick={revertFlipBookmark}
      /> {bookmarkCnt}
    </div>
  ) : (
    <div>
      <Img
        src={'/images/bookmark-off.png'}
        onClick={postFlipBookmark}
      /> {bookmarkCnt}
    </div>
  )

  const favoriteButton = isGood ? (
    <div>
      <Img
        src={'/images/favorite-on.png'}
        onClick={revertFlipGood}
      /> {goodCnt}
    </div>
  ) : (
    <div>
      <Img
        src={'/images/favorite-off.png'}
        onClick={postFlipGood}
      /> {goodCnt}
    </div>
  )

  return (
    <Div className='FlipDetailSideBar'>
      {favoriteButton}
      {bookmarkButton}
    </Div>
  )
}

export default FlipDetailSideBar
