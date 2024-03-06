import React, { FC } from "react";
import {
  useGetArticlesQuery,
  useRemoveArticleMutation,
  useUpdateArticleMutation,
} from "../entities/Article/api/articlesApi";
import { ArticlesList } from "../entities/Article/ui/ArticlesList";
import { CreateArticleModal } from "../features/createArticle/CreateArticlModal";

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { data = [], isLoading, error } = useGetArticlesQuery();

  //const [title, setTitle] = useState("");

  //const [createArticle, {}] = useCreateArticleMutation();
  const [updateArticle, {}] = useUpdateArticleMutation();
  const [removeArticle, {}] = useRemoveArticleMutation();

  if (error) {
    return <p>Ошибка при загрузке статей</p>;
  }

  /*  const handleCreateArticle = async () => {
    await createArticle({
      title,
      subtitle: `Что нового в ${title} в 2024 году`,
    } as IArticle);
  };*/

  return (
    <div>
      <div>
        <CreateArticleModal />
      </div>
      {/*   <div className={cls.header}>
        <input
          type="text"
          value={title}
          className={cls.input}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleCreateArticle}>Добавить статью</button>
      </div>*/}
      <ArticlesList
        articles={data}
        isLoading={isLoading}
        update={updateArticle}
        remove={removeArticle}
      />
    </div>
  );
};
