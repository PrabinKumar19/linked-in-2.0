import React from "react";
import { FiberManualRecord, Info } from "@mui/icons-material";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Papa react is back", "Top news - 9999 readers")}
      {newsArticle("Corona Virus : UK updates", "Top news - 886 readers")}
      {newsArticle("Tesla hits new highs", "Cars & Auto 300 readers")}
      {newsArticle("Bitcoins breaks $22k", "Crypto - 8000 readers")}
      {newsArticle("Is Redux too good", "Code - 123 readers")}
    </div>
  );
}

export default Widgets;
