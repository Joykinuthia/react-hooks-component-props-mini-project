import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  function getReadTimeEmoji(minutes) {
    if (minutes < 30) {
      return "☕️".repeat(Math.ceil(minutes / 5)) + ` ${minutes} min read`;
    } else {
      return "🍱".repeat(Math.ceil(minutes / 10)) + ` ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutes && <small> · {getReadTimeEmoji(minutes)}</small>}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
