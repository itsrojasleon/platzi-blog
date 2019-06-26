import React from 'react';

function CommentDetails(props) {
  return (
    <>
      <strong>{props.email}</strong>
      <p>{props.name}</p>
    </>
  );
}

export default CommentDetails;
