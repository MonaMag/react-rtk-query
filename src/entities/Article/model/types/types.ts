export interface IComment {
  text: string;
  userId: string;
  date: string;
}

export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  paragraph: string;
  createdArticle: string;
  comments?: IComment[];
}
