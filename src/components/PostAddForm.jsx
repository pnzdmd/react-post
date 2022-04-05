import React from 'react';

const PostAddForm = () => {
  return (
    <form className='bottom-panel d-flex'>
      <input
        className='from-control new-post-label'
        type='text'
        placeholder='О чем вы думаете сейчас?'
      />
      <button className='btn btn-outline-secondary' type='submit'>
        Добавить
      </button>
    </form>
  );
};

export default PostAddForm;
