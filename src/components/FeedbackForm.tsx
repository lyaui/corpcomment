import { useState, type ChangeEvent } from 'react';
import { MAX_CHARACTERS } from '../lib/constants';

function FeedbackForm() {
  const [text, setText] = useState('');

  const charCnt = MAX_CHARACTERS - text.length;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length >= MAX_CHARACTERS) return;
    setText(newText);
  };

  return (
    <form className='form'>
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
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
