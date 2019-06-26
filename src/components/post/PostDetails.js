import React from 'react';

function PostDetails(props) {
  return (
    <div className='post'>
      <div className='title'>{props.title}</div>
      <div className='body'>{props.body}</div>
    </div>
  );
}
export default PostDetails;
