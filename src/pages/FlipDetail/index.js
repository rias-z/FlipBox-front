import React, { Component } from 'react'
import { connect } from 'react-redux'

// api
import { initializedFlipDetail } from './logic'


class FlipDetail extends Component {
  componentWillMount() {
    const flip_id = this.props.match.params.flip_id

    this.props.initializedFlipDetail(flip_id)
  }

  render() {
    if (this.props.isLoading) {
      const flip = this.props.flipDetail.flip
      const author = this.props.flipDetail.author
      const items = this.props.flipDetail.items

      return (
        <div className="FlipDetail">
          --- FlipDetail (public) ---
          <br />
          Author:<br/>
          [{author.user_id}] {author.username} {author.thumbnail}<br />
          <br />

          Flip:<br />
          [{flip.flip_id}] {flip.title}<br />
          bmk: {flip.bookmark_cnt} gb: {flip.good_cnt} create_at: ({flip.create_at})<br />
          <br />

          Items:<br />
          {items.map(item => (
            <div key={item.item_id}>
              [{item.item_id}] {item.name}<br />
              url: {item.url}<br />
              description: {item.description}<br />
              <br />
            </div>
          ))}
        </div>
      )
    } else {
      return (
        <div className="FlipDetail" />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  flipDetail: state.FlipDetail.flipDetail,
  isLoading: state.FlipDetail.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  initializedFlipDetail: (flip_id) => dispatch(initializedFlipDetail(flip_id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlipDetail)
