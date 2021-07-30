import React from 'react';
import './Loader.scss';

export const Loader = React.memo(
  () => (
    <div className="loader">
      <div className="loader__spinner" />

      <span className="loader__text">
        Loading data...
      </span>
    </div>
  ),
);
