import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { MAX_CHARACTERS } from '../lib/constants';

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

function FeedbackForm({ onAddToList }: FeedbackFormProps) {
  const [text, setText] = useState('');

  const charCnt = MAX_CHARACTERS - text.length;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length >= MAX_CHARACTERS) return;
    setText(newText);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddToList(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <textarea
        value={text}
        onChange={handleChange}
        id='feedback-textarea'
        placeholder=''
        maxLength={MAX_CHARACTERS}
        spellCheck={false}
      />
      <label htmlFor='feedback-textarea'>
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className='u-italic'>{charCnt}</p>
        <button type='submit'>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
