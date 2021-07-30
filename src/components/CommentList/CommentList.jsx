import React, { useContext } from 'react';
import { CommentsContext } from '../../CommentsContext';
import { Loader } from '../Loader';
import { CommentItem } from '../CommentItem';
import { Pagination } from '../Pagination';

import './CommentList.scss';

export const CommentList = React.memo(
  () => {
    const { currentCommentList } = useContext(CommentsContext);

    return (
      <div className="comment-list app__content">
        <h2 className="comment-list__title">
          Comments
        </h2>

        {currentCommentList.length === 0 ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <ul className="comment-list__content">
              {currentCommentList.map(({ id, name, text }) => (
                <CommentItem item={{ name, text }} key={id} />
              ))}
            </ul>

            <div className="comment-list__pagination">
              <Pagination />
            </div>
          </>
        )}
      </div>
    );
  },
);
