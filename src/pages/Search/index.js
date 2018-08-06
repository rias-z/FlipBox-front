import React, { Component } from 'react'
import { connect } from 'react-redux'

// logic
import { getSearchFlip } from './logic'

// containers
import MainView from '../../components/MainView'


class Search extends Component {
  componentWillMount() {
    // TODO: クエリが存在しない場合，「検索クエリが設定されていません」を表示する
    const query = this.props.location.search

    this.props.getSearchFlip(query)
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="Search">
          --- Search ---

          <MainView
            flips={this.props.flips}
          />

          [paging]<br />
          current: {this.props.paging.current}<br />
          total: {this.props.paging.total}<br />
        </div>
      )
    } else {
      return (
        <div className="Search" />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  flips: state.Search.flips,
  isLoading: state.Search.isLoading,
  paging: state.Search.paging,
})

const mapDispatchToProps = (dispatch) => ({
  getSearchFlip: (query) => dispatch(getSearchFlip(query)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
