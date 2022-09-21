import React from "react";
import InputOptions from "./InputOptions";
import { Avatar } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import "./Post.css";
import { ChatOutlined, SendOutlined, ShareOutlined } from "@mui/icons-material";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color={"gray"} />
        <InputOptions Icon={ChatOutlined} title="Comment" color={"gray"} />
        <InputOptions Icon={ShareOutlined} title="Share" color={"gray"} />
        <InputOptions Icon={SendOutlined} title="Send" color={"gray"} />
      </div>
    </div>
  );
}

export default Post;
