import React from "react";
import "./App.css";
import { ArticlesPage } from "./pages/ArticlesPage";
import { CreateArticleModal } from "./features/createArticle/CreateArticl";

function App() {
  /* const { data = [], isLoading, error } = useGetArticlesQuery();

  console.log("data", data);
  if (error) {
    return <p>Ошибка при загрузке статей</p>;
  }*/
  return (
    <div className={"App"}>
      <CreateArticleModal />
      <ArticlesPage />
    </div>
  );
}

export default App;
