import React from "react";
import Comment from "./Comment";

const CommentsList = ({ data: comments }) => {
  return comments.map((comment, i) => (
    <div key={i} >
      <Comment data={comment} />
      <div className="pl-7 ml-5 ">
        <CommentsList data={comment?.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
