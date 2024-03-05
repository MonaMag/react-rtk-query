import { FC } from "react";
import cls from "./ArticlesList.module.css";
import { ArticleItem } from "./ArticleItem";
import { IArticle } from "../model/types/types";

interface ArticlesListProps {
  articles: IArticle[];
  isLoading: boolean;
}

export const ArticlesList: FC<ArticlesListProps> = ({
  articles,
  isLoading,
}: ArticlesListProps) => {
  if (!isLoading && !articles.length) {
    return <div>Статьи не найдены</div>;
  }

  return (
    <div className={cls.articleList}>
      {articles &&
        articles.map((item) => <ArticleItem article={item} key={item.id} />)}
    </div>
  );
};
