import React, { useState, useContext } from 'react';
import { CommentsContext } from '../../CommentsContext';
import { post } from '../../api';
import './Form.scss';

export const Form = React.memo(
  () => {
    const { updateData } = useContext(CommentsContext);

    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const addComment = () => {
      const comment = {
        name,
        text,
      };

      setName('');
      setText('');

      post(comment)
        .then(() => updateData());
    };

    return (
      <form
        className="new-comment__form"
        onSubmit={(event) => {
          event.preventDefault();
          addComment();
        }}
      >
        <label htmlFor="name" className="new-comment__label">
          <span className="new-comment__label-title">
            Enter the name
          </span>

          <input
            id="name"
            className="new-comment__input"
            type="text"
            name="name"
            placeholder="Author's name"
            required
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>

        <label htmlFor="text" className="new-comment__label">
          <span className="new-comment__label-title">
            Enter the text
          </span>

          <textarea
            id="text"
            className="new-comment__input new-comment__input--textarea"
            placeholder="Сomment text"
            rows="5"
            required
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </label>

        <button
          className="new-comment__submit"
          type="submit"
        >
          Add
        </button>
      </form>
    );
  },
);
