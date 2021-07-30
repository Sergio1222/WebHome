import React from 'react';

export const CommentsContext = React.createContext({
  updateData: () => {},
  pagesAmount: 1,
  currentCommentList: [],
  currentPage: 0,
  getData: () => {},
});
