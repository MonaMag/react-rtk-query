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
import { CreateArticleModal } from "../features/createArticle/CreateArticlModal";

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { data = [], isLoading, error } = useGetArticlesQuery();

  const [title, setTitle] = useState("");

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
      <CreateArticleModal />
      <div className={cls.header}>
        <input
          type="text"
          value={title}
          className={cls.input}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleCreatePost}>Добавить статью</button>
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
