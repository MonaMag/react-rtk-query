import React, { FC } from "react";
import { IArticle } from "../model/types/types";
import cls from "./ArticlesList.module.css";

interface ArticleItemProps {
  article: IArticle;
  update: (article: IArticle) => void;
  remove: (article: IArticle) => void;
}

export const ArticleItem: FC<ArticleItemProps> = ({
  article,
  update,
  remove,
}) => {
  const handleUpdateArticle = (event: React.MouseEvent) => {
    event?.stopPropagation();
    const title = prompt() || "";
    update({ ...article, title: title });
  };

  const handleRemoveArticle = (event: React.MouseEvent) => {
    event?.stopPropagation();
    remove(article);
  };

  return (
    <div className={cls.content}>
      <div className={cls.card}>
        <h2>{article.title}</h2>
        <p>{article.subtitle}</p>
        <div className={cls.actionBtn}>
          <button className={cls.button} onClick={handleRemoveArticle}>
            Удалить
          </button>
          <button className={cls.button} onClick={handleUpdateArticle}>
            Изменить
          </button>
        </div>
      </div>
    </div>
  );
};
