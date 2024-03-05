import React from "react";
import { IArticle } from "../model/types/types";
import cls from "./ArticlesList.module.css";

interface ArticleItemProps {
  article: IArticle;
  update: (article: IArticle) => void;
}

export const ArticleItem = ({ article, update }: ArticleItemProps) => {
  return (
    <div className={cls.content}>
      <div className={cls.card}>
        <h2>{article.title}</h2>
        <p>{article.subtitle}</p>
        <div className={cls.actionBtn}>
          <button className={cls.button}>Удалить</button>
          <button className={cls.button}>Изменить</button>
        </div>
      </div>
    </div>
  );
};
