import React from "react";
import Comment from "./CommentsComponents/Comment";
import CommentsList from "./CommentsComponents/CommentsList";
import { generateRandomMessage, generateRandomName } from "../../Utils/helper";

const commentData = [
  {
    name: generateRandomName(),
    text: generateRandomMessage(30),
    replies: [
      {
        name: generateRandomName(),
        text: generateRandomMessage(40),
        replies: [
          {
            name: generateRandomName(),
            text: generateRandomMessage(20),
            replies: [
              {
                name: generateRandomName(),
                text: generateRandomMessage(40),
                replies: [],
              },
              {
                name: generateRandomName(),
                text: generateRandomMessage(50),
                replies: [],
              },
              {
                name: generateRandomName(),
                text: generateRandomMessage(20),
                replies: [],
              },
            ],
          },
          {
            name: generateRandomName(),
            text: generateRandomMessage(60),
            replies: [],
          },
          {
            name: generateRandomName(),
            text: generateRandomMessage(10),
            replies: [],
          },
          {
            name: generateRandomName(),
            text: generateRandomMessage(20),
            replies: [],
          },
        ],
      },
      {
        name: generateRandomName(),
        text: generateRandomMessage(30),
        replies: [],
      },
      {
        name: generateRandomName(),
        text: generateRandomMessage(10),
        replies: [],
      },
    ],
  },
  {
    name: generateRandomName(),
    text: generateRandomMessage(50),
    replies: [],
  },
  {
    name: generateRandomName(),
    text: generateRandomMessage(40),
    replies: [],
  },
  {
    name: generateRandomName(),
    text: generateRandomMessage(20),
    replies: [],
  },
  {
    name: generateRandomName(),
    text: generateRandomMessage(20),
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
