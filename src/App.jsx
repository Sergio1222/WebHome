import React, { useState, useEffect } from 'react';
import { sendQuerry } from './api';
import { CommentsContext } from './CommentsContext';
import { NewComment } from './components/NewComment';
import { CommentList } from './components/CommentList';
import './App.scss';

const App = () => {
  const [pagesAmount, setPagesAmount] = useState(1);
  const [currentCommentList, setCurrentCommentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getData = (pageNumber = 1) => {
    sendQuerry({}, pageNumber)
      .then(({ data, last_page, current_page }) => {
        setCurrentPage(current_page);
        setCurrentCommentList([...data]);
        setPagesAmount(last_page);
      });
  };

  const updateData = () => {
    getData(currentPage);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <h1 className="app__title">Comments</h1>

      <CommentsContext.Provider
        value={{
          updateData,
          pagesAmount,
          currentCommentList,
          currentPage,
          getData,
        }}
      >
        <NewComment />

        <CommentList />
      </CommentsContext.Provider>
    </div>
  );
};

export default App;
