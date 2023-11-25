import React from "react";
import Comment from "./CommentsComponents/Comment";
import CommentsList from "./CommentsComponents/CommentsList";

const commentData = [
  {
    name: "abc",
    text: "lorem ipsum text sir color dols",
    replies: [
      {
        name: "abc 2",
        text: "lorem ipsum text sir color dols",
        replies: [
          {
            name: "abc 3",
            text: "lorem ipsum text sir color dols",
            replies: [
              {
                name: "abc 3",
                text: "lorem ipsum text sir color dols",
                replies: [],
              },
              {
                name: "abc 3",
                text: "lorem ipsum text sir color dols",
                replies: [],
              },
              {
                name: "abc 3",
                text: "lorem ipsum text sir color dols",
                replies: [],
              },
            ],
          },
          {
            name: "abc 3",
            text: "lorem ipsum text sir color dols",
            replies: [],
          },
          {
            name: "abc 3",
            text: "lorem ipsum text sir color dols",
            replies: [],
          },
          {
            name: "abc 3",
            text: "lorem ipsum text sir color dols",
            replies: [],
          },
        ],
      },
      {
        name: "abc 2",
        text: "lorem ipsum text sir color dols",
        replies: [],
      },
      {
        name: "abc 2",
        text: "lorem ipsum text sir color dols",
        replies: [],
      },
    ],
  },
  {
    name: "abc 22",
    text: "lorem ipsum text sir color dols",
    replies: [],
  },
  {
    name: "abc 33",
    text: "lorem ipsum text sir color dols",
    replies: [],
  },
  {
    name: "abc 44",
    text: "lorem ipsum text sir color dols",
    replies: [],
  },
  {
    name: "abc 55",
    text: "lorem ipsum text sir color dols",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-lg font-bold">Comments</h1>
      <input
        className="w-[90%] border-b-[1px] my-3 px-2"
        type="text"
        placeholder="Add a comment"
      />

      {/* <Comment data={commentData[0]} /> */}

      <CommentsList data={commentData} />
    </div>
  );
};

export default CommentsContainer;
