import React, { FC } from "react";
import { ArticleItem } from "./ArticleItem";
import { IArticle } from "../model/types/types";
import cls from "./ArticlesList.module.css";

interface ArticlesListProps {
  articles: IArticle[];
  isLoading: boolean;
  update: (article: IArticle) => void;
  remove: (article: IArticle) => void;
}

export const ArticlesList: FC<ArticlesListProps> = ({
  articles,
  isLoading,
  update,
  remove,
}: ArticlesListProps) => {
  if (!isLoading && !articles.length) {
    return <div>Статьи не найдены</div>;
  }

  return (
    <div>
      <div className={cls.articleList}>
        {articles.map((item) => (
          <ArticleItem
            article={item}
            key={item.id}
            update={update}
            remove={remove}
          />
        ))}
      </div>
    </div>
  );
};
