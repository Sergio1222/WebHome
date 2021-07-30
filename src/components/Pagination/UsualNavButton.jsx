import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const UsualNavButton = React.memo(
  ({ number, currentPage, getData }) => (
    <li className="pagination__item">
      <button
        className={classNames(
          'pagination__link',
          { 'pagination__link--selected': currentPage === number },
        )}
        type="button"
        onClick={() => {
          if (number !== currentPage) {
            getData(number);
          }
        }}
      >
        {number}
      </button>
    </li>
  ),
);

UsualNavButton.propTypes = {
  number: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  getData: PropTypes.func.isRequired,
};
