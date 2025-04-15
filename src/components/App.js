import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header name="Overreacted" />
      <About
        image="https://via.placeholder.com/215"
        about="Personal thoughts and musings from a software developer."
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;