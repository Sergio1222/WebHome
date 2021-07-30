import React from 'react';

export const DisabledNavButton = React.memo(
  () => (
    <li className="pagination__item">
      <button
        className="pagination__link"
        type="button"
        disabled
      >
        ...
      </button>
    </li>
  ),
);
