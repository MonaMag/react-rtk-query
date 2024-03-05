import React from "react";
import "./App.css";
import { ArticlesList } from "./entities/Article/ui/ArticlesList";

function App() {
  return (
    <div>
      <ArticlesList
        articles={[{ id: 5, title: "title", subtitle: "subtitle" }]}
      />
    </div>
  );
}

export default App;
