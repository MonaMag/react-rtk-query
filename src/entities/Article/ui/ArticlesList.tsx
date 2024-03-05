import { FC } from "react";
import cls from "./ArticlesList.module.css";
import { ArticleItem } from "./ArticleItem";
import { IArticle } from "../model/types/types";

interface ArticlesListProps {
  articles: IArticle[];
}

export const ArticlesList: FC<ArticlesListProps> = ({
  articles,
}: ArticlesListProps) => {
  return (
    <div className={cls.articleList}>
      {articles &&
        articles.map((item) => <ArticleItem article={item} key={item.id} />)}
    </div>
  );
};
