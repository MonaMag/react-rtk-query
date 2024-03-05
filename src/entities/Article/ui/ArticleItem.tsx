import React from "react";
import { IArticle } from "../model/types/types";
import cls from "./ArticlesList.module.css";

interface ArticleItemProps {
  article: IArticle;
}

export const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <div className={cls.content}>
      <div className={cls.card}>
        <h1>{article.title}</h1>
        <p>{article.subtitle}</p>
        <button>Удалить</button>
      </div>
    </div>
  );
};
