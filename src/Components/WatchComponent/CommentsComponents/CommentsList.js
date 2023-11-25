import React from "react";
import Comment from "./Comment";

const CommentsList = ({ data: comments }) => {
  return comments.map((comment, i) => (
    <div>
      <Comment key={i} data={comment} />
      <div className="pl-7 ml-5 border border-l-black">
        <CommentsList data={comment?.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
