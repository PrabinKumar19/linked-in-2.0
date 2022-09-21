import { Create } from "@mui/icons-material";
import React from "react";
import "./feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions"></div>
      </div>
    </div>
  );
}

export default Feed;
