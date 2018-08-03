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
          | user [id: {f.user.user_id} username: {f.user.username} thumbnail: {f.user.thumbnail}]<br />
          | bmk: {f.bookmark_cnt} gb: {f.good_cnt}<br />
          | create_at: {f.create_at}<br />
          ---------------------------------------------------------------<br />
        </div>
      ))}
    </div>
  )
}

export default MainView
