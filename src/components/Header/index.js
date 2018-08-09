import React from 'react'
import styled from 'styled-components'


const StyledHeader = styled.header`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4rem;
  padding: 0;
  background-color: #8bd;
`

const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`

const StyledMenuItem = styled.div`
  margin: 0 0.4rem;
  background-color: #9e9;
`


const Header = (props) => {
  const { isAuthenticated, username } = props

  if (isAuthenticated) {
    return (
      <StyledHeader className='Header'>
        <StyledMenu>
          <StyledMenuItem><a href='/'>FlipBox</a></StyledMenuItem>
          <StyledMenuItem><a href='/search'>キーワード/タグ検索</a></StyledMenuItem>
          <StyledMenuItem><a href='/'>*Flipリスト</a></StyledMenuItem>
          <StyledMenuItem><a href='/new'>*Flip作成</a></StyledMenuItem>
          <StyledMenuItem><a href={'/user/' + username}>*{username}のマイページ</a></StyledMenuItem>
          <StyledMenuItem><a href='/settings'>*設定</a></StyledMenuItem>
          <StyledMenuItem>*通知</StyledMenuItem>
        </StyledMenu>
      </StyledHeader>
    )
  } else {
    return (
      <StyledHeader className='Header'>
        <StyledMenu>
          <StyledMenuItem><a href='/'>FlipBox</a></StyledMenuItem>
          <StyledMenuItem><a href='/search'>キーワード/タグ検索</a></StyledMenuItem>
          <StyledMenuItem><a href='/'>Flipリスト</a></StyledMenuItem>
          <StyledMenuItem><a href='/'>Flip作成</a></StyledMenuItem>
          <StyledMenuItem><a href='/prov_register'>登録</a></StyledMenuItem>
        </StyledMenu>
      </StyledHeader>
    )
  }
}

export default Header
