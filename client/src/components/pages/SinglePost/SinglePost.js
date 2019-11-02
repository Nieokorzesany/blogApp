import React from "react";

const SinglePost = props => (
  <div>
    <h1>SinglePost {props.match.params.id}</h1>
  </div>
);
export default SinglePost;
