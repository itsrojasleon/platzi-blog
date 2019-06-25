import React from 'react';

function PostDetails(props) {
  return (
    <div>
      <div style={{ color: 'red' }}>{props.title}</div>
      <div>{props.body}</div>
    </div>
  );
}
export default PostDetails;
