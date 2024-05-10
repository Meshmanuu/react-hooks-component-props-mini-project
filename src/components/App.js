import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header name={blogData.name} />

      {/* About Component */}
      <About image={blogData.image} about={blogData.about} />

      {/* ArticleList Component */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
