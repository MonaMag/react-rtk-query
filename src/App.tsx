import React from "react";
import { ArticlesList } from "./entities/Article/ui/ArticlesList";
import { useGetArticlesQuery } from "./entities/Article/api/articlesApi";
import "./App.css";

function App() {
  const { data = [], isLoading, error } = useGetArticlesQuery();

  console.log("data", data);
  if (error) {
    return <p>Ошибка при загрузке статей</p>;
  }
  return (
    <div className={"App"}>
      <ArticlesList articles={data} isLoading={isLoading} />
    </div>
  );
}

export default App;
