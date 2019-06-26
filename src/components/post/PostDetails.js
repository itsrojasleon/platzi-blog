import React from 'react';
import Comment from '../comment/Comment';

function PostDetails(props) {
  return (
    <div className='post'>
      <div className='title'>{props.title}</div>
      <div className='body'>{props.body}</div>
      <Comment id={props.id} />
    </div>
  );
}
export default PostDetails;
