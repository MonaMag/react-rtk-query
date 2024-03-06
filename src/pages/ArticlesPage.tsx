import React, { FC, useState } from "react";
import {
  useCreateArticleMutation,
  useGetArticlesQuery,
  useRemoveArticleMutation,
  useUpdateArticleMutation,
} from "../entities/Article/api/articlesApi";
import { ArticlesList } from "../entities/Article/ui/ArticlesList";
import { IArticle } from "../entities/Article/model/types/types";
import cls from "../entities/Article/ui/ArticlesList.module.css";

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const [title, setTitle] = useState("");
  const [limit, setLimit] = useState("");

  const { data = [], isLoading, error } = useGetArticlesQuery(limit);
  const [createArticle, {}] = useCreateArticleMutation();
  const [updateArticle, {}] = useUpdateArticleMutation();
  const [removeArticle, {}] = useRemoveArticleMutation();

  if (error) {
    return <p>Ошибка при загрузке статей</p>;
  }

  const handleCreatePost = async () => {
    await createArticle({
      title,
      subtitle: `Что нового в ${title} в 2024 году`,
    } as IArticle);
  };

  return (
    <div>
      <div className={cls.header}>
        <input
          type="text"
          value={title}
          className={cls.input}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleCreatePost}>Добавить статью</button>
      </div>
      <div>
        <select value={limit} onChange={(e) => setLimit(e.target.value)}>
          <option value="">all</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <ArticlesList
        articles={data}
        isLoading={isLoading}
        update={updateArticle}
        remove={removeArticle}
      />
    </div>
  );
};
