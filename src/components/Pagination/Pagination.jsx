import React, { useContext } from 'react';
import { CommentsContext } from '../../CommentsContext';
import { DisabledNavButton } from './DisabledNavButton';
import { UsualNavButton } from './UsualNavButton';
import './Pagination.scss';

export const Pagination = React.memo(
  () => {
    const {
      currentPage,
      pagesAmount,
      getData,
    } = useContext(CommentsContext);

    const maxPossibleLength = 7;

    const callUsualButton = (number) => (
      <UsualNavButton
        number={number}
        currentPage={currentPage}
        getData={getData}
      />
    );

    const renderButtons = () => {
      if (pagesAmount === maxPossibleLength) {
        return (
          <>
            {callUsualButton(2)}

            {callUsualButton(3)}
          </>
        );
      }

      if (currentPage === 1) {
        return (
          <>
            {callUsualButton(2)}

            <DisabledNavButton />
          </>
        );
      }

      if (currentPage === 2) {
        return (
          <>
            {callUsualButton(2)}

            {callUsualButton(3)}

            <DisabledNavButton />
          </>
        );
      }

      if (currentPage === 3) {
        return (
          <>
            {callUsualButton(2)}

            {callUsualButton(3)}

            {callUsualButton(4)}

            <DisabledNavButton />
          </>
        );
      }

      if (currentPage === pagesAmount) {
        return (
          <>
            <DisabledNavButton />

            {callUsualButton(pagesAmount - 1)}
          </>
        );
      }

      if (currentPage === (pagesAmount - 1)) {
        return (
          <>
            <DisabledNavButton />

            {callUsualButton(pagesAmount - 2)}

            {callUsualButton(pagesAmount - 1)}
          </>
        );
      }

      if (currentPage === (pagesAmount - 2)) {
        return (
          <>
            <DisabledNavButton />

            {callUsualButton(pagesAmount - 3)}

            {callUsualButton(pagesAmount - 2)}

            {callUsualButton(pagesAmount - 1)}
          </>
        );
      }

      return (
        <>
          <DisabledNavButton />

          {callUsualButton(currentPage - 1)}

          {callUsualButton(currentPage)}

          {callUsualButton(currentPage + 1)}

          <DisabledNavButton />
        </>
      );
    };

    return (
      <ul className="pagination">
        <li className="pagination__item">
          <button
            className="pagination__link pagination__link--switcher"
            type="button"
            disabled={currentPage === 1}
            onClick={() => {
              getData(currentPage - 1);
            }}
          >
            &lt;
          </button>
        </li>

        {callUsualButton(1)}

        {renderButtons()}

        {callUsualButton(pagesAmount)}

        <li className="pagination__item">
          <button
            className="pagination__link pagination__link--switcher"
            type="button"
            disabled={currentPage === pagesAmount}
            onClick={() => {
              getData(currentPage + 1);
            }}
          >
            &gt;
          </button>
        </li>
      </ul>
    );
  },
);
