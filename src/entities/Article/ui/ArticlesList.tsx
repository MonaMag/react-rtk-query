import React, { FC, useState } from "react";
import cls from "./ArticlesList.module.css";
import { ArticleItem } from "./ArticleItem";
import { IArticle } from "../model/types/types";
import {
  useCreateArticleMutation,
  useUpdateArticleMutation,
} from "../api/articlesApi";

interface ArticlesListProps {
  articles: IArticle[];
  isLoading: boolean;
}

export const ArticlesList: FC<ArticlesListProps> = ({
  articles,
  isLoading,
}: ArticlesListProps) => {
  const [title, setTitle] = useState("");

  const [createArticle, {}] = useCreateArticleMutation();
  const [updateArticle, {}] = useUpdateArticleMutation();

  if (!isLoading && !articles.length) {
    return <div>Статьи не найдены</div>;
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
      <div className={cls.articleList}>
        {articles &&
          articles.map((item) => (
            <ArticleItem article={item} key={item.id} update={updateArticle} />
          ))}
      </div>
    </div>
  );
};
