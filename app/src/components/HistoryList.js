import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchHistory } from '../actions/fetchHistory';
import History from './History';

const HistoryList = props => {
  useEffect(() => {
    props.fetchHistory();
  }, [])

  return (
    <div className='article-list'>
      <h1 className='articles-title'>SpaceX News</h1>
      {props.history.reverse().map(article => (
        <History key={article.id} article={article}/>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.history.isFetching,
    history: state.history.history,
    errors: state.history.errors
  }
}

export default connect(mapStateToProps, {fetchHistory})(HistoryList);