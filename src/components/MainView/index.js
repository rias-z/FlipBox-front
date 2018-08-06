import React from 'react'


const MainView = (props) => {
  return (
    <div className='MainView'>
      <br />
      --- MainView (public) ---

      {props.flips.map(f => (
        <div key={f.flip.flip_id}>
          ---------------------------------------------------------------<br />
          | * [{f.flip.flip_id}] <a href={'flip/' + f.flip.flip_id}>{f.flip.title}</a><br />
          | author [id: {f.author.user_id} username: {f.author.username} thumbnail: {f.author.thumbnail}]<br />
          | bmk: {f.flip.bookmark_cnt} gb: {f.flip.good_cnt}<br />
          | create_at: {f.flip.create_at}<br />
          ---------------------------------------------------------------<br />
        </div>
      ))}
    </div>
  )
}

export default MainView
